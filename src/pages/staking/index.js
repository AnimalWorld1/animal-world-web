import './index.sass'
import {observer} from "mobx-react";
import StoreContext from "../../store/RootStore";
import {ReactComponent as WalletUserIcon} from '../../assets/icons/wallet-user-icon.svg';
import * as waxjs from "@waxio/waxjs/dist";
import {useEffect, useState} from "react";
import eosjsName from "eosjs-account-name";
import Pagination from "../../components/pagination";
import Notification from "../../components/notification";
import {NotificationManager} from "react-notifications";
import Preloader from "../../components/preloader";
import {Fade} from 'react-awesome-reveal';

function StakingPage() {
    const {AccountStore} = StoreContext();
    const wax = new waxjs.WaxJS("https://wax.greymass.com", null, null, false);
    const [balanceWax, setBalanceWax] = useState(null);
    const [balanceAwc, setBalanceAwc] = useState(null);
    const [stakePower, setStakePower] = useState(null);
    const [timeToReward, setTimeToReward] = useState(null);
    const [unstakedAssets, setUnstakedAssets] = useState([]);
    const [stakedAssets, setStakedAssets] = useState([]);
    const [chosenAssets, setChosenAssets] = useState("staked");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const assetsPerPage = 8; //how many assets are shown on screen

    async function sendTransaction(actions, wallet, successMessage) {
        setLoading(true);
        try {
            if (wallet === "wcw") {
                const wax = new waxjs.WaxJS("https://wax.greymass.com", AccountStore.accountAddress, AccountStore.getUserData()[2], false)
                const res = await wax.api.transact({
                    actions: actions
                }, {
                    blocksBehind: 3,
                    expireSeconds: 30
                })
                setLoading(false);
                NotificationManager.success(successMessage)
                return res;
            } else if (wallet === "anchor") {
                const res = await AccountStore.getUserData()[2].transact({
                    actions: actions
                }, {
                    blocksBehind: 3,
                    expireSeconds: 30
                })
                setLoading(false);
                NotificationManager.success(successMessage)
                return res.processed.id
            }
        } catch (e) {
            setLoading(false);
            if (e.message === "assertion failure with message: Nothing to claim") {
                NotificationManager.warning("Nothing to claim.", "Warning")
            } else {
                NotificationManager.error(e.message, "An error has occurred.");
            }
        }
    }

    async function getUserBalanceWax() {
        try {
            const tableRows = await wax.rpc.get_table_rows({
                json: true,
                code: "eosio.token",
                scope: AccountStore.accountAddress,
                table: "accounts",
            });
            if (tableRows.rows.length === 0) {
                setBalanceWax(0);
            } else {
                setBalanceWax(String(tableRows.rows[0].balance).slice(0, 6))
            }
        } catch (e) {
            NotificationManager.error(e.message, "An error has occurred.");
        }
    }

    async function getUserBalanceAwc() {
        try {
            const tableRows = await wax.rpc.get_table_rows({
                json: true,
                code: "tokenanimal1",
                scope: AccountStore.accountAddress,
                table: "accounts",
            });
            if (tableRows.rows.length === 0) {
                setBalanceAwc("0.0000 AWC");
            } else {
                setBalanceAwc(String(tableRows.rows[0].balance).slice(0, 6))
            }
        } catch (e) {
            NotificationManager.error(e.message, "An error has occurred.");
        }
    }

    async function getLastClaim() {
        try {
            const data = await wax.rpc.get_table_rows({
                json: true,
                code: "stakeanimal1",
                scope: "stakeanimal1",
                table: "user",
                limit: 10,
                lower_bound: AccountStore.accountAddress,
            });
            if (data.rows.length !== 0) {
                data.rows.forEach(row => {
                    if (row.account === AccountStore.accountAddress) {
                        const now = new Date()
                        const utcMilllisecondsSinceEpoch = now.getTime();
                        const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)
                        const seconds = (row.data[0].last_claim + 3600) - utcSecondsSinceEpoch;
                        const date = new Date(seconds * 1000).toISOString().substr(14, 5);
                        if (utcSecondsSinceEpoch >= row.data[0].last_claim + 3600) {
                            setTimeToReward("Claim now!")
                        } else {
                            setTimeToReward(date);
                        }
                    }
                })
            }
        } catch (e) {
            NotificationManager.error(e.message, "An error has occurred.");
        }
    }


    async function getAssets() {
        setLoading(true);
        try {
            const assets = [];
            const response = await fetch(`https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=animalworld1&owner=${AccountStore.accountAddress}&page=1&limit=1000&order=desc&sort=asset_id`, {
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "GET",
            });
            const body = await response.json();
            for (let i = 0; i < body.data.length; i++) {
                let data = body.data[i];
                assets.push({
                    asset_id: data.asset_id,
                    img: data.data.img,
                    name: data.name,
                    template: data.template
                })
            }
            await getStakingRates(assets);
        } catch (e) {
            setLoading(false);
            NotificationManager.error(e.message, "An error has occurred.");
        }
    }

    async function getStakingRates(assets) {
        let collections = await wax.rpc.get_table_rows({
            json: true,
            code: "stakeanimal1",
            scope: "stakeanimal1",
            table: "collections",
            limit: 1,
        });
        collections = collections.rows[0];

        const leveltemp = await wax.rpc.get_table_rows({
            json: true,
            code: "stakeanimal1",
            scope: "stakeanimal1",
            table: "leveltemp",
            limit: 100,
        });

        let stakePower;
        if (leveltemp.rows.length !== 0) {
            leveltemp.rows.forEach(levelRow => {
                levelRow.template_ids.forEach((templateID) => {
                    assets.forEach(asset => {
                        if (Number(asset.template.template_id) === templateID) {
                            collections.levels.forEach(level => {
                                if (level.key === levelRow.level) {
                                    asset.rate = level.value
                                    if (stakePower > 0) {
                                        stakePower = stakePower + Number(level.value)
                                    } else {
                                        stakePower = Number(level.value)
                                    }
                                }
                            })
                        }
                    })
                })
            })
        }
        setStakePower(stakePower);
        filterAssets(assets)
    }

    async function filterAssets(assets) {
        const filteredAssets = [];

        const body = await wax.rpc.get_table_rows({
            json: true,
            code: "stakeanimal1",
            scope: "stakeanimal1",
            table: "nfts",
            key_type: "i64",
            index_position: 2,
            lower_bound: eosjsName.nameToUint64(AccountStore.accountAddress),
            limit: 1000,
        });
        const data = body.rows;

        if (data.length !== 0) {
            assets.forEach(asset => {
                data.forEach(dataItem => {
                    if (dataItem.asset_id === asset.asset_id && dataItem.account === AccountStore.accountAddress) {
                        filteredAssets.push(asset);
                    }
                })
            })
        }

        setLoading(false);
        setStakedAssets(filteredAssets)
        const unstakedAssets = assets.filter(item => {
            if (!filteredAssets.includes(item) && item.rate) {
                return item
            }
        })
        setUnstakedAssets(unstakedAssets);
    }

    function renderAssets() {
        const indexOfLastAsset = currentPage * assetsPerPage;
        const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
        if (chosenAssets === "staked") {
            const currentAssets = stakedAssets.slice(indexOfFirstAsset, indexOfLastAsset);
            return (
                stakedAssets.length !== 0 && stakedAssets.length < assetsPerPage ?
                    stakedAssets.map((asset, index) => {
                        return (
                            <div className="staking-asset" key={`staked-asset-${index}`}>
                                <div className="staking-asset-name-wrapper">
                                    <span className="staking-asset-name">{asset.name}</span>
                                </div>
                                <img src={`https://ipfs.wecan.dev/ipfs/${asset.img}`} alt=""
                                     className="staking-asset-img"/>
                                <span className="staking-asset-rate">{asset.rate.slice(0, 6)}/day</span>
                                <button className="staking-asset-button" disabled={loading}
                                        onClick={() => unStakeAssets([asset.asset_id])}>Unstake asset
                                </button>
                            </div>
                        )

                    })
                    : stakedAssets.length > assetsPerPage ?
                        <>
                            <div className="staking-assets">
                                {currentAssets.map((asset, index) => {
                                    return (<div className="staking-asset" key={`staked-asset-${index}`}>
                                        <div className="staking-asset-name-wrapper">
                                            <span className="staking-asset-name">{asset.name}</span>
                                        </div>
                                        <img src={`https://ipfs.wecan.dev/ipfs/${asset.img}`} alt=""
                                             className="staking-asset-img"/>
                                        <span className="staking-asset-rate">{asset.rate.slice(0, 6)}/day</span>
                                        <button className="staking-asset-button" disabled={loading}
                                                onClick={() => unStakeAssets([asset.asset_id])}>Unstake asset
                                        </button>
                                    </div>)
                                })}
                            </div>
                            <Pagination contentPerPage={assetsPerPage} totalContent={stakedAssets.length}
                                        paginate={(pageNum) => setCurrentPage(pageNum)} currentPage={currentPage}/>
                        </>
                        : <h4 className="staking-no-assets-title">No assets to show</h4>
            )
        } else if (chosenAssets === "unstaked") {
            const currentAssets = unstakedAssets.slice(indexOfFirstAsset, indexOfLastAsset);
            return (
                unstakedAssets.length !== 0 && unstakedAssets.length < assetsPerPage ?
                    unstakedAssets.map((asset, index) => {
                        return (
                            <div className="staking-asset" key={`unstaked-asset-${index}`}>
                                <div className="staking-asset-name-wrapper">
                                    <span className="staking-asset-name">{asset.name}</span>
                                </div>
                                <img src={`https://ipfs.wecan.dev/ipfs/${asset.img}`} alt=""
                                     className="staking-asset-img"/>
                                <span className="staking-asset-rate">{asset.rate.slice(0, 6)}/day</span>
                                <button className="staking-asset-button" disabled={loading}
                                        onClick={() => stakeAssets([asset.asset_id])}>Stake asset
                                </button>
                            </div>
                        )
                    })
                    : unstakedAssets.length > assetsPerPage ?
                        <>
                            <div className="staking-assets">
                                {currentAssets.map((asset, index) => {
                                    return (<div className="staking-asset" key={`staked-asset-${index}`}>
                                        <div className="staking-asset-name-wrapper">
                                            <span className="staking-asset-name">{asset.name}</span>
                                        </div>
                                        <img src={`https://ipfs.wecan.dev/ipfs/${asset.img}`} alt=""
                                             className="staking-asset-img"/>
                                        <span className="staking-asset-rate">{asset.rate.slice(0, 6)}/day</span>
                                        <button className="staking-asset-button" disabled={loading}
                                                onClick={() => unStakeAssets([asset.asset_id])}>Unstake asset
                                        </button>
                                    </div>)
                                })}
                            </div>
                            <Pagination contentPerPage={assetsPerPage} totalContent={unstakedAssets.length}
                                        paginate={(pageNum) => setCurrentPage(pageNum)} currentPage={currentPage}/>
                        </>
                        : <h4 className="staking-no-assets-title">No assets to show</h4>
            )
        }
    }

    async function claimTokens() {
        await sendTransaction([{
            account: 'stakeanimal1',
            name: 'claim',
            authorization: [{
                actor: AccountStore.accountAddress,
                permission: AccountStore.getUserData()[0] === "anchor" ? AccountStore.getUserData()[3] : "active",
            }], data: {
                _user: AccountStore.accountAddress,
            },
        }], AccountStore.getUserData()[0], "Tokens claimed.").then(() => {
                setTimeout(() => {
                    getUserBalanceAwc();
                }, 2000)
            }
        )
    }

    async function stakeAssets(assetIDs) {
        await sendTransaction([{
            account: 'stakeanimal1',
            name: 'stakeassets',
            authorization: [{
                actor: AccountStore.accountAddress,
                permission: AccountStore.getUserData()[0] === "anchor" ? AccountStore.getUserData()[3] : "active",
            }],
            data: {
                _user: AccountStore.accountAddress,
                asset_ids: assetIDs
            },
        }], AccountStore.getUserData()[0], "Assets staked.")
        setTimeout(() => {
            getAssets();
        }, 1000)
    }

    async function unStakeAssets(assetIDs) {
        await sendTransaction([{
            account: 'stakeanimal1',
            name: 'removenft',
            authorization: [{
                actor: AccountStore.accountAddress,
                permission: AccountStore.getUserData()[0] === "anchor" ? AccountStore.getUserData()[3] : "active",
            }],
            data: {
                _user: AccountStore.accountAddress,
                asset_ids: assetIDs
            },
        }], AccountStore.getUserData()[0], "Assets unstaked.")
        setTimeout(() => {
            getAssets();
        }, 1000)
    }

    useEffect(() => {
        if (AccountStore.accountAddress) {
            getUserBalanceWax();
            getUserBalanceAwc();
            getAssets();
        }
    }, [AccountStore.accountAddress])

    useEffect(() => {
        if (AccountStore.accountAddress && stakedAssets.length > 0) {
            const interval = setInterval(() => getLastClaim(), 1000);
            return () => clearInterval(interval);
        }
    }, [AccountStore.accountAddress, getLastClaim])


    return (AccountStore.accountAddress ?
            <div className="staking-page">
                <Notification/>
                <Fade bottom>
                    <div className="staking-info-wrapper">
                        <div className="staking-info">
                            <div className="staking-info-item">
                                <WalletUserIcon className="staking-info-item-wallet-icon"/>
                                <span className="staking-info-item-text">{AccountStore.accountAddress}</span>
                            </div>
                            <div className="staking-info-item">
                                <img src={require("../../assets/icons/wax-icon.png").default} alt="wax icon"
                                     className="staking-info-item-image"/>
                                <span className="staking-info-item-text">{balanceWax ? balanceWax : "Loading..."}</span>
                            </div>
                            <div className="staking-info-item">
                                <img src={require("../../assets/icons/awc-icon.png").default} alt="awc icon"
                                     className="staking-info-item-image"/>
                                <span className="staking-info-item-text">{balanceAwc ? balanceAwc : "Loading..."}</span>
                            </div>
                        </div>
                        <div className="staking-info">
                            <div className="staking-info-item staking-info-item-apart">
                                <span className="staking-info-item-title">Stake power</span>
                                <span
                                    className="staking-info-item-text">{stakePower ? String(stakePower).slice(0, 6) : "0.0000"} AWC</span>
                            </div>
                            <div className="staking-info-item staking-info-item-apart">
                                <span className="staking-info-item-title">time to reward</span>
                                <span
                                    className="staking-info-item-text">{timeToReward ? timeToReward : stakedAssets.length > 0 ? "Loading..." : "No staked assets."}</span>
                            </div>
                            <button className="staking-info-claim" onClick={() => claimTokens()}>Claim</button>
                        </div>
                    </div>
                </Fade>
                <h2 className="page-title">Assets</h2>
                <Fade bottom>
                    <div className="staking-assets-wrapper">
                        <div className="staking-assets-filters-wrapper">
                            <div className="staking-assets-filters-buttons">
                                <button className="staking-assets-filters-button staking-assets-filters-button-stake"
                                        disabled={loading} onClick={() => {
                                    const assetIDs = [];
                                    unstakedAssets.forEach(asset => {
                                        assetIDs.push(asset.asset_id)
                                    })
                                    stakeAssets(assetIDs)
                                }}>Stake All
                                </button>
                                <button className="staking-assets-filters-button staking-assets-filters-button-unstake"
                                        disabled={loading} onClick={() => {
                                    const assetIDs = [];
                                    stakedAssets.forEach(asset => {
                                        assetIDs.push(asset.asset_id)
                                    })
                                    unStakeAssets(assetIDs);
                                }}>Unstake All
                                </button>
                            </div>
                            <div className="staking-assets-filters">
                                <button
                                    className={`staking-assets-filter ${chosenAssets === "staked" ? "staking-assets-filter-active" : ""}`}
                                    disabled={loading}
                                    onClick={() => {
                                        getAssets().then(() => {
                                            setChosenAssets("staked")
                                        })
                                    }}>Staked
                                </button>
                                <div className="staking-assets-vertical-line"/>
                                <button
                                    className={`staking-assets-filter ${chosenAssets === "unstaked" ? "staking-assets-filter-active" : ""}`}
                                    disabled={loading}
                                    onClick={() => {
                                        getAssets().then(() => {
                                            setChosenAssets("unstaked")
                                        })
                                    }}>Unstaked
                                </button>
                            </div>
                        </div>
                        <div className="staking-assets-container">
                            {loading ? <Preloader/> : renderAssets()}
                        </div>
                    </div>
                </Fade>
            </div> :
            <Fade bottom>
                <div className="wallet-warning">
                    <h2 className="warning-message">Please connect your wallet first.</h2>
                </div>
            </Fade>
    )
}

export default observer(StakingPage);