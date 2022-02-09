import './index.sass'
import {ReactComponent as Roadmap} from "../../assets/images/roadmap.svg";

export default function PacksPage() {

    return (
        <div className="packs-page">
            <section className="packs">
                <h2 className="packs-title">Tree packs</h2>
                <h6 className="packs-subtitle">v. 1</h6>
                <div className="packs-wrapper">
                    <div className="pack">
                        <div className="pack-img-shadow"/>
                        <div className="pack-img-wrapper">
                            <img src={require("../../assets/images/tree-pack-starter.png").default} alt="Tree starter pack"
                                 className="pack-img"/>
                        </div>
                        <div className="pack-wrapper">
                            <div className="pack-info-wrapper">
                                <div className="pack-info">
                                    <h5 className="pack-info-name">Starter pack</h5>
                                    <span className="pack-info-quantity">20 cards</span>
                                    <h4 className="pack-info-price">20$</h4>
                                </div>
                                <div className="pack-info-cards">
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">common card</span>
                                        <span className="pack-info-card-percentage">77%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">rare card</span>
                                        <span className="pack-info-card-percentage">18%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">epic card</span>
                                        <span className="pack-info-card-percentage">4%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">legendary card</span>
                                        <span className="pack-info-card-percentage">0.8%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">mythic card</span>
                                        <span className="pack-info-card-percentage">0.2%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pack-button-wrapper">
                                <button className="pack-button pack-button-disabled" disabled>Sold out</button>
                                <button className="pack-button">Buy on secondary</button>
                            </div>
                        </div>
                    </div>
                    <div className="pack">
                        <div className="pack-img-shadow"/>
                        <div className="pack-img-wrapper">
                            <img src={require("../../assets/images/tree-pack-premium.png").default} alt="Tree premium pack"
                                 className="pack-img"/>
                        </div>
                        <div className="pack-wrapper">
                            <div className="pack-info-wrapper">
                                <div className="pack-info">
                                    <h5 className="pack-info-name">Premium pack</h5>
                                    <span className="pack-info-quantity">20 cards</span>
                                    <h4 className="pack-info-price">40$</h4>
                                </div>
                                <div className="pack-info-cards">
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">common card</span>
                                        <span className="pack-info-card-percentage">38%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">rare card</span>
                                        <span className="pack-info-card-percentage">43%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">epic card</span>
                                        <span className="pack-info-card-percentage">15%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">legendary card</span>
                                        <span className="pack-info-card-percentage">3%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">mythic card</span>
                                        <span className="pack-info-card-percentage">1%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pack-button-wrapper">
                                <button className="pack-button pack-button-disabled" disabled>Sold out</button>
                                <button className="pack-button">Buy on secondary</button>
                            </div>
                        </div>
                    </div>
                    <div className="pack">
                        <div className="pack-img-shadow pack-img-shadow-legendary"/>
                        <div className="pack-img-wrapper">
                            <img src={require("../../assets/images/tree-pack-legendary.png").default}
                                 alt="Tree legendary pack" className="pack-img pack-img-legendary"/>
                        </div>
                        <div className="pack-wrapper pack-wrapper-legendary">
                            <div className="pack-info-wrapper">
                                <div className="pack-info">
                                    <h5 className="pack-info-name">Legendary pack</h5>
                                    <span
                                        className="pack-info-quantity pack-info-quantity-small">20 premium cards</span>
                                    <h4 className="pack-info-price">500$</h4>
                                </div>
                                <div className="pack-info-cards">
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">common card</span>
                                        <span className="pack-info-card-percentage">77%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">rare card</span>
                                        <span className="pack-info-card-percentage">18%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">epic card</span>
                                        <span className="pack-info-card-percentage">4%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">legendary card</span>
                                        <span className="pack-info-card-percentage">0.8%</span>
                                    </div>
                                    <div className="pack-info-card">
                                        <span className="pack-info-card-name">mythic card</span>
                                        <span className="pack-info-card-percentage">0.2%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pack-button-wrapper">
                                <button className="pack-button pack-button-disabled" disabled>Sold out</button>
                                <a href="/" className="pack-button">Buy on secondary</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}