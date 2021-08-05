const DarkHeader = () => {
    return (
        <header>
            <div className="header-grid">
                <a href="store" className="fvp-logo">
                    <img src="./images/farmz2u-logo.svg" alt className="logo-img" />
                    <img
                        src="./images/farmz2u-logo.svg"
                        alt
                        className="logo-img logo-img-lg"
                    />
                </a>
                <button id="menu-btn" onclick="openMenu()" className="menu-btn">
                    <img
                        src="./images/hamburger-grey.svg"
                        alt
                        className="hamburger-menu"
                    />
                </button>
                <ul id="nav" className="nav-lists">
                    <button
                        id="close-btn"
                        onclick="openMenu()"
                        className="menu-btn cancel-btn"
                    >
                        <img src="./images/cancel.svg" alt className="hamburger-menu" />
                    </button>
                    <li className="nav-list">
                        <a href="/store" className="nav-list-link">
                            <img
                                src="./images/home.svg"
                                alt
                                className="list-link-icon light-icon"
                            />
                            <img
                                src="./images/home.svg"
                                alt
                                className="list-link-icon dark-icon"
                            />
                            <span className="list-link-text">Home</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href="/cart" className="nav-list-link">
                            <img
                                src="./images/cart.svg"
                                alt
                                className="list-link-icon light-icon"
                            />
                            <img
                                src="./images/cart-dark.svg"
                                alt
                                className="list-link-icon dark-icon"
                            />
                            <span className="list-link-text">Cart</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href className="nav-list-link">
                            <img
                                src="./images/search.svg"
                                alt
                                className="list-link-icon light-icon"
                            />
                            <img
                                src="./images/search-dark.svg"
                                alt
                                className="list-link-icon dark-icon"
                            />
                            <span className="list-link-text">Search</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href="dashboard-home" className="nav-list-link">
                            <img
                                src="./images/person.svg"
                                alt
                                className="list-link-icon light-icon"
                            />
                            <img
                                src="./images/person-dark.svg"
                                alt
                                className="list-link-icon dark-icon"
                            />
                            <span className="list-link-text">Profile</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <ul className="user-actions">
                            <li className="action">
                                <a
                                    href="/register"
                                    target="_blank"
                                    className="action-link register-nav"
                                >
                                    Register
                                </a>
                            </li>
                            <li className="action">
                                <a href="/login" target="_blank" className="action-link">
                                    Log In
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>

     );
}
 
export default DarkHeader;