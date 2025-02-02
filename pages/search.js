import Header from "../components/store-components/header"
import Footer from "../components/store-components/footer"
const Store = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main-grid">
                    <div className="col-1">
                        <h3 className="col-title col-1-title-lg">Featured Products</h3>
                        <div className="col-1-box">
                            <img src="./images/apple.png" alt className="col-1-box-img" />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Apple</h4>
                                <h6 className="col-1-sub-title">Nature Valley Agro</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>2,000
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/cocoa-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Cocoa Beans</h4>
                                <h6 className="col-1-sub-title">Kithekani Farms</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>1,340
                                </p>
                            </div>
                            <button className="btn added-to-cart">Added to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/corn-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Corn</h4>
                                <h6 className="col-1-sub-title">Della Royale Farms</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>2,700
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/fresh-potatoes-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Potatoes</h4>
                                <h6 className="col-1-sub-title">Aisha Goods</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>2,000
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/broccoli-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Broccoli</h4>
                                <h6 className="col-1-sub-title">John and John Farm</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>4,000
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img src="./images/apple.png" alt className="col-1-box-img" />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Apple</h4>
                                <h6 className="col-1-sub-title">Rhamon Store</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>2,000
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/cocoa-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Cocoa Beans</h4>
                                <h6 className="col-1-sub-title">John and John Farm</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>1,340
                                </p>
                            </div>
                            <button className="btn added-to-cart">Added to Cart</button>
                        </div>
                        <div className="col-1-box">
                            <img
                                src="./images/corn-reduced.png"
                                alt
                                className="col-1-box-img"
                            />
                            <div className="col-1-box-info">
                                <h4 className="col-1-title">Corn</h4>
                                <h6 className="col-1-sub-title">Ade Farmer's Place</h6>
                                <p className="col-1-price">
                                    <sup>N</sup>2,700
                                </p>
                            </div>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
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
                        <a href="vendor-list.html" className="btn view-vendors">
                            View all vendors
                        </a>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}

export default Store;