import './index.sass'
import {ReactComponent as TwitterLogo} from '../../assets/icons/footer-twitter.svg';
import {ReactComponent as InstagramLogo} from '../../assets/icons/footer-instagram.svg';
import {ReactComponent as MediumLogo} from '../../assets/icons/footer-medium.svg';
import {ReactComponent as TelegramLogo} from '../../assets/icons/footer-telegram.svg';
import {ReactComponent as DiscordLogo} from '../../assets/icons/footer-discord.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-company-info">ALL RIGHTS RESERVED BY- SMS tech Corporation , REG NR:  890515712/ PS WARD / COMMERCIAL II,  601/A , Chandresh arcade , Lodha road , Mira road east . Mumbai - 401107.</p>
                <div className="footer-social">
                    <span className="footer-social-text">Follow us on social media</span>
                    <div className="footer-social-links">
                        <a href="https://twitter.com/animalworldwax?t=tuy6WxG7Xq2AigaGZasE_g&s=09" target="_blank" rel="noreferrer" className="footer-social-link">
                            <TwitterLogo className="footer-social-link-image"/>
                        </a>
                        <a href="https://www.instagram.com/animalworldwax/?utm_medium=copy_link" target="_blank" rel="noreferrer" className="footer-social-link">
                            <InstagramLogo className="footer-social-link-image"/>
                        </a>
                        <a href="https://medium.com/@animalworldwax" target="_blank" rel="noreferrer" className="footer-social-link">
                            <MediumLogo className="footer-social-link-image"/>
                        </a>
                        <a href="https://t.me/animalworldwax" target="_blank" rel="noreferrer" className="footer-social-link">
                            <TelegramLogo className="footer-social-link-image"/>
                        </a>
                        <a href="https://discord.gg/nbeb6MN9hA" target="_blank" className="footer-social-link">
                            <DiscordLogo className="footer-social-link-image"/>
                        </a>
                    </div>
                </div>
                <div className="footer-social-copyright">
                    <a href="mailto:smstechcorp@gmail.com" target="_blank" rel="noreferrer"
                       className="footer-social-copyright-email">smstechcorp@gmail.com</a>
                    <span className="footer-social-copyright-text">© 2022 Animalworld.io All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}