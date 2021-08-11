import React, { useState, useEffect } from 'react';
import getUrl from "../get-url";
const StoreHeader = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);


    const [profile, setProfile] = useState(null);


    const logout = () => {
        localStorage.removeItem("token")
        setProfile(null)
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            const authTokens = localStorage.getItem('token')
            console.log(authTokens, "THE USER TOKEN");
            fetch(getUrl("users/me/"), {
                headers: {
                    Authorization: `Token ${authTokens}`,
                },
            })
                .then((response) => response.json())
                .then((data) => setProfile(data))
                // .then(console.log(profile))
        }
    }
        , []);



    return (
        <header>
            <title>Farmz2U Home</title>
            <div className="header-grid">
                <a href="/" className="fvp-logo">
                    <img
                        src="./images/farmz2u-logo-footer.svg"
                        alt
                        className="logo-img"
                    />
                    <img
                        src="./images/farmz2u-logo.svg"
                        alt
                        className="logo-img logo-img-lg"
                    />
                </a>
                <button id="menu-btn" onClick={() => setSideDrawerOpen(true)} className="menu-btn">
                    <img src="./images/hamburger.svg" alt className="hamburger-menu" />
                </button>
                {sideDrawerOpen && <ul id="nav" className="nav-lists" style={{
                    display: sideDrawerOpen ? "flex" : "none",
                }}>
                    <button
                        id="close-btn"
                        onClick={() => { setSideDrawerOpen(false); console.log("clicked"); }}
                        className="menu-btn cancel-btn"
                    >
                        <img src="./images/cancel.svg" alt className="hamburger-menu" />
                    </button>
                    <li className="nav-list">
                        <a href="/" className="nav-list-link">
                            <img src="./images/home.svg" alt className="list-link-icon" />
                            <span className="list-link-text">Home</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href="/cart" className="nav-list-link">
                            <img src="./images/cart.svg" alt className="list-link-icon" />
                            <span className="list-link-text">Cart</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href="/vendor-list" className="nav-list-link">
                            <img src="./images/search.svg" alt className="list-link-icon" />
                            <span className="list-link-text">Search</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a href className="nav-list-link">
                            <img src="./images/person.svg" alt className="list-link-icon" />
                            <span className="list-link-text">Profile</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <ul className="user-actions">
                            <li className="action">

                                {profile && profile.first_name ?
                                    <a href="#" className="action-link">

                                        {profile.first_name}
                                    </a> :
                                    <a
                                        href="/register"
                                        target="_blank"
                                        className="action-link register-nav"
                                    >
                                        Register
                                    </a>}

                            </li>
                            <li className="action">

                                {profile && profile.first_name ?
                                    <a href="/login" className="action-link" onClick={logout}>
                                        Log Out
                                    </a> :
                                    <a href="/login" className="action-link">
                                        Log In
                                    </a>
                                }
                            </li>
                        </ul>
                    </li>
                </ul>
                }
            </div>
        </header>

    );
}

export default StoreHeader;