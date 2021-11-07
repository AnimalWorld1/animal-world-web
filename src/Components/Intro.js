import nft_meet_real from "../assets/real_img.webp";
function Intro(){
    return(
        <div style={{ height: "20em", width: "100vw" }}>
            <img
            src="../assets/real_img.webp"
            className="animate__animated animate__flip"
            style={{ width: "11em", position: "relative", top: "-5%" }}
            alt="Where NFT meet Real World"
            />
            <p
            style={{ fontSize: "0.6em", margin: "0 10%", textAlign: "justify" }}
            className="animate__animated animate__flip"
            >
            ANIMAL WORLD is a dynamic tokenized, environmentally sustainable
            PROJECT IN THE FORM OF
            <span className="orangeText">
                {" "}
                futuristic MULTI-CHAIN farM BUILDING game.
            </span>
            It offers a riveting simulated gameplay iN which a player can collect,
            own, trade and exchange farming assets and winnings. We at ANIMAL
            WORLD are committed towards enabling and building a community of
            ecologically aware individuals who will engage in a self-sustainable
            and{" "}
            <span className="orangeText">
                {" "}
                ecologically positive farming.{" "}
            </span>{" "}
            The project runs on a
            <span className="orangeText"> real-time basis </span>with
            user-friendly accessibility and consistent monitoring.
            </p>
        </div>)
}
export default Intro;