const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-intro-col">
                    <img
                        src="./images/farmz2u-logo-grey.svg"
                        alt
                        className="footer-logo"
                    />
                    <p className="paragraph footer-paragraph">
                        Helping farm and food produce vendors connect to end consumers
                        easier.
                    </p>
                </div>
                <div className="footer-col-1">
                    <h3 className="title footer-title">We are Social</h3>
                    <div className="footer-socials">
                        <div className="footer-social">
                            <img
                                src="./images/twitter.svg"
                                alt
                                className="footer-social-icon"
                            />
                            <span className="footer-social-text">Twitter</span>
                        </div>
                        <div className="footer-social">
                            <img
                                src="./images/facebook.svg"
                                alt
                                className="footer-social-icon"
                            />
                            <span className="footer-social-text">Facebook</span>
                        </div>
                        <div className="footer-social">
                            <img
                                src="./images/instagram.svg"
                                alt
                                className="footer-social-icon"
                            />
                            <span className="footer-social-text">Instagram</span>
                        </div>
                    </div>
                </div>
                <div className="footer-col-2">
                    <h3 className="title footer-title">Links</h3>
                    <ul className="footer-link-lists">
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                About Us
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                Terms of Use
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                Privacy
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                Safety Tips
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                FAQs
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                Contact
                            </a>
                        </li>
                        <li className="footer-link-list">
                            <a href="#" className="footer-link">
                                Referral System
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <h3 className="title coming-soon-title">Coming soon</h3>
                    <img src="./images/Google-play.svg" alt className="store-img" />
                    <img src="./images/Apple-store.svg" alt className="store-img" />
                </div>
            </div>
        </footer>

      );
}
 
export default Footer;


