import DarkHeader from "../components/store-components/DarkHeader";
import getUrl from "../components/get-url";
import Footer from "../components/store-components/footer"
import React, { useState, useEffect } from 'react';

const Vendors = () => {

    const [vendors, setVendors] = useState()

    useEffect(() => {

        if (typeof window !== 'undefined') {
            const authTokens = localStorage.getItem('token')
            console.log(authTokens, "THE USER TOKEN");
            fetch(getUrl("products"), {
                headers: {
                    Authorization: `Token ${authTokens}`,
                },
            })
                .then((response) => response.json())
                .then((data) => setVendors(data))
            // .then(console.log(profile))
        }
    }
        , []);
    return (
        <>
            <title>Vendor List</title>

            <DarkHeader />
            <main>
                <div className="main-grid vendor-list-grid">
                    <div className="search-grid">
                        <div className="select-city-box">
                            <select name id className="select-city">
                                <option value="select city" className="select-option">
                                    Select City
                                </option>
                                <option value="Lekki" className="select-option">
                                    Lekki
                                </option>
                                <option value="Lekki Inside" className="select-option">
                                    Lekki Inside
                                </option>
                                <option value="Oshodi" className="select-option">
                                    Oshodi
                                </option>
                                <option value="Oshodi Inside" className="select-option">
                                    Oshodi Inside
                                </option>
                            </select>
                        </div>
                        <div className="search-box">
                            <input type="text" className="search" placeholder="Enter Search" />
                            <img src="./images/search-grey.svg" alt className="search-icon" />
                        </div>
                        <button className="btn search-btn">Search</button>
                    </div>
                    <div className="vendors-list">
                        <div className="goods">
                            <img src="./images/nature.png" alt className="goods-img" />
                            <div className="goods-info">
                                <h4 className="goods-title">Nature Valley Agro</h4>
                                <p className="paragraph goods-paragraph">Lagos, Nigeria</p>
                            </div>
                            <a href="nature-valley.html" className="btn visit-btn">
                                Visit Store
                            </a>
                        </div>
                        <div className="goods">
                            <img src="./images/della.png" alt className="goods-img" />
                            <div className="goods-info">
                                <h4 className="goods-title">Della Royale Farms</h4>
                                <p className="paragraph goods-paragraph">Ogun, Nigeria</p>
                            </div>
                            <a href="della-royale.html" className="btn visit-btn">
                                Visit Store
                            </a>
                        </div>
                        <div className="goods">
                            <img src="./images/kithekani.png" alt className="goods-img" />
                            <div className="goods-info">
                                <h4 className="goods-title">Kithekani Farms</h4>
                                <p className="paragraph goods-paragraph">Machakos, Kenya</p>
                            </div>
                            <a href="kithekani-farms.html" className="btn visit-btn">
                                Visit Store
                            </a>
                        </div>
                        <div className="goods">
                            <img src="./images/organic.jpg" alt className="goods-img" />
                            <div className="goods-info">
                                <h4 className="goods-title">Organic Fairy</h4>
                                <p className="paragraph goods-paragraph">Lagos, Nigeria</p>
                            </div>
                            <a href="organic-fairy.html" className="btn visit-btn">
                                Visit Store
                            </a>
                        </div>
                        <div className="goods">
                            <img src="./images/pan_jollof.jpg" alt className="goods-img" />
                            <div className="goods-info">
                                <h4 className="goods-title">Pan Jollof</h4>
                                <p className="paragraph goods-paragraph">Ogun, Nigeria</p>
                            </div>
                            <a href="pan-jollof.html" className="btn visit-btn">
                                Visit Store
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>

    );
}

export default Vendors;


