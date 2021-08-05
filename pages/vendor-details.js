import DarkHeader from "../components/store-components/DarkHeader"
const VendorDetails = () => {
    return (
        <>
            <title>Vendor's Store</title>
            <DarkHeader/>
            <main>
                <div className="main-grid vendors-store-grid">
                    <div className="vendor-head">
                        <div className="vendor-owner">
                            <img src="./images/della.png" alt className="owner-img" />
                            <div className="owner-info">
                                <h3 className="owner-info-title">Della Royale Farms</h3>
                                <div className="owner-location">
                                    <img
                                        src="./images/location-on.svg"
                                        alt
                                        className="location-icon"
                                    />
                                    <p className="location-info">Ogun, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="store-grid">
                        <div className="store-cart">
                            <div className="cart-head">
                                <h3 className="cart-head-title">Basket of Apple</h3>
                                <img src="./images/apple.png" alt className="cart-head-img" />
                            </div>
                            <div className="cart-info">
                                <h3 className="title cart-info-title">Basket of Apple</h3>
                                <h3 className="title cart-info-number">
                                    <sup>N</sup>2,500
                                </h3>
                                <p className="paragraph cart-paragraph">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor
                                </p>
                                <a href="#" className="btn cart-btn">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="store-grid">
                        <div className="store-cart">
                            <div className="cart-head">
                                <h3 className="cart-head-title">Basket of Apple</h3>
                                <img src="./images/apple.png" alt className="cart-head-img" />
                            </div>
                            <div className="cart-info">
                                <h3 className="title cart-info-title">Basket of Apple</h3>
                                <h3 className="title cart-info-number">
                                    <sup>N</sup>2,500
                                </h3>
                                <p className="paragraph cart-paragraph">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor
                                </p>
                                <a href="#" className="btn cart-btn">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="store-grid">
                        <div className="store-cart">
                            <div className="cart-head">
                                <h3 className="cart-head-title">Basket of Apple</h3>
                                <img src="./images/apple.png" alt className="cart-head-img" />
                            </div>
                            <div className="cart-info">
                                <h3 className="title cart-info-title">Basket of Apple</h3>
                                <h3 className="title cart-info-number">
                                    <sup>N</sup>2,500
                                </h3>
                                <p className="paragraph cart-paragraph">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor
                                </p>
                                <a href="#" className="btn cart-btn">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default VendorDetails;