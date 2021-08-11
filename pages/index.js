import Header from "../components/store-components/header"
import Footer from "../components/store-components/footer"
import Product from "../components/store-components/productItem"
import { useState, useEffect } from "react"
import getUrl from "../components/get-url";


const Store = () => {

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
                .then((data) => setFeaturedProducts(data))
            // .then(console.log(profile))z
        }
    }
        , []);

    const [FeaturedProducts, setFeaturedProducts] = useState([
        {
            name: "Apple",
            vendor: "Nature Valley Agro",
            price: "100",
            image: "./images/apple.png"
        },
        {
            name: "Cocoa Beans",
            vendor: "Kithekani Farms",
            price: "1,340",
            image: "./images/cocoa-reduced.png"
        },
        {
            name: "Corn",
            vendor: "Della Royale Farms",
            price: "3700",
            image: "./images/corn-reduced.png"

        },
        {
            name: "Potatoes",
            vendor: "Aisha Goods",
            price: "100",
            image: "./images/fresh-potatoes-reduced.png"

        },
        {
            name: "Brocolli",
            vendor: "John and John Farm",
            price: "4000",
            image: "./images/broccoli-reduced.png"

        },
        {
            name: "Apple",
            vendor: "Rhamon Store",
            price: "200",
            image: "./images/apple.png"

        },
        {
            name: "Cocoa Beans",
            vendor: "John and John Farm",
            price: "1340",
            image: "./images/cocoa-reduced.png"

        },
        {
            name: "Corn",
            vendor: "Ade Farmer's Place",
            price: "2700",
            image: "./images/corn-reduced.png"
        },
    ])
    return (
        <>
            <Header />
            <main>
                <div className="main-grid">
                    <div className="intro-col">
                        <img src="./images/mobile-image.png" alt className="intro-img" />
                        <img src="./images/image.png" alt className="intro-img-lg" />
                        <div className="intro-info">
                            <h3 className="intro-title">Farm-To-Table Fresh For You</h3>
                            <p className="paragraph intro-paragraph">
                                You’re in control of how and what you eat! Have fresh fruits and
                                vegetables delivered straight to your door from quality farms.
                            </p>
                            <a href="/vendor-list" className="start-shopping">
                                Start Shopping
                                <img
                                    src="./images/shopping-cart.svg"
                                    alt
                                    className="start-shopping-img"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-1">
                        <h3 className="col-title col-1-title-lg">Featured Products</h3>
                        {FeaturedProducts.map((item) => {
                            return <Product item={item} />
                        })}
                    </div>
                    <div className="col-2">
                        <h3 className="col-title col-2-title">Featured Vendors</h3>
                        <div className="col-2-vendor-slide">
                            <div className="col-2-vendor">
                                <img src="./images/nature.png" alt className="vendor-img" />
                                <p className="col-2-vendor-title">Nature Valley Agro</p>
                            </div>
                            <div className="col-2-vendor">
                                <img src="./images/della.png" alt className="vendor-img" />
                                <p className="col-2-vendor-title">Della Royale Farms</p>
                            </div>
                            <div className="col-2-vendor">
                                <img src="./images/kithekani.png" alt className="vendor-img" />
                                <p className="col-2-vendor-title">Kithekani Farms</p>
                            </div>
                            <div className="col-2-vendor">
                                <img src="./images/organic.jpg" alt className="vendor-img" />
                                <p className="col-2-vendor-title">Organic Fairy</p>
                            </div>
                            <div className="col-2-vendor">
                                <img src="./images/pan_jollof.jpg" alt className="vendor-img" />
                                <p className="col-2-vendor-title">Pan Jollof</p>
                            </div>
                        </div>
                        <a href="/vendor-list" className="btn view-vendors">
                            View all vendors
                        </a>
                    </div>
                    <div className="col-3">
                        <h3 className="title-vendor-signup-title">
                            Sign Up <br className="vendor-line-br" /> as a Vendor
                        </h3>
                        <a href="/register" className="btn vendor-signup-btn">
                            Sign Up
                        </a>
                        <img
                            src="./images/vendor-illustration.svg"
                            alt
                            className="vendor-signup-img"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Store;