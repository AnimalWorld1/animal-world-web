import React, { useState } from 'react'
import StakedNFT from './StakedNFT'
import UnStakedNFT from './UnStakedNFT'

const Assets= require('../assets/assets')

function Staking({user,handler,w_type})     {

    const [staked, setStaked] = useState(true)
    const staking =()=>{setStaked(true);}
    const unstaking =()=>{setStaked(false);}

    if( Assets.assets==null )
    Assets.functions.getassetdata(user);

    const now = new Date()  
    const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
    const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)  

    var timeLeft,stakePower=0;
    if( Assets.user_data!=null)
    {
    console.log(Assets.user_data.last_claim);
    var seconds=(Assets.user_data.last_claim+3600)-utcSecondsSinceEpoch;
    var g=new Date(seconds * 1000).toISOString().substr(14, 5);
     timeLeft= utcSecondsSinceEpoch>=Assets.user_data.last_claim+3600?"Claim now":g;
        stakePower=Assets.user_data.stakePower;
}


    let transaction=async () => {
        try {
          let response = w_type=="w"?await handler.api.transact({
          actions: [{
            account: 'stakeanimal1',
            name: 'claim',
            authorization: [{
              actor: handler.userAccount,
              permission: 'active',
            }],
            data: {
              _user: handler.userAccount
            },
          }]
        }, {
          blocksBehind: 3,
          expireSeconds: 1200,
        }):await handler.transact({
          action: {
            account: 'stakeanimal1',
            name: 'claim',
            authorization: [handler.auth],
            data: {
              _user: user
            }
          },
        });
        await response;
            alert("Claim successfull !");
      return response;

      }
      catch(e){
        alert(e.message);
      }
    };
    return (

        <div>
            {user && (<div>
                <table id="dashboard" style={{display:"flex",justifyContent:"center",textAlign:"left"}}>
                    <tbody>            
                      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <button className="nav-item nav-links btnClaim" onClick={transaction}>Claim</button>
                        </div>
                        <tr><td>----------------------------</td><td>----------------------------</td></tr>
                        <tr><td>User</td><td>{user}</td></tr>
                        <tr><td> Stake Power</td><td> {stakePower.toFixed(4)} AWC per Day</td></tr>
                        <tr><td>Time To Reward</td><td>{timeLeft}</td></tr>

                    </tbody>
                </table>
            </div>)}

            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <button className="nav-item nav-links btnStk" onClick={staking}>Staked NFT</button>
                <button className="nav-item nav-links btnStk" onClick={unstaking} font-color="blue">UnStaked NFT</button>
            </div>
           {user && Assets.assets? (staked ? <StakedNFT perPage={12} assets={Assets.assets} handler={handler} w_type={w_type}/> :
            <UnStakedNFT perPage={12} unstaked_data={Assets.unstaked} handler={handler} w_type={w_type}/>):""}
            </div>

    );
}

export default Staking