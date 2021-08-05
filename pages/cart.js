import DarkHeader from "../components/store-components/DarkHeader";
const Cart = () => {
    return (
        <>
            <DarkHeader/>
            <main>
                <div className="main-grid cart-grid">
                    <div className="cart-block">
                        <h3 className="title cart-block-title">Cart</h3>
                        <p className="paragraph cart-block-paragraph">
                            3 Items: Cart Total{" "}
                            <span className="cart-number">
                                <sup>N</sup>29,270
                            </span>
                        </p>
                    </div>
                    <div className="carts">
                        <div className="cart-item">
                            <img src="./images/apple.png" alt className="item-img" />
                            <div className="cart-item-info">
                                <h3 className="item-info-number">N2,500</h3>
                                <p className="item-info-title">Basket Of Apple</p>
                                <div className="quantity-input">
                                    <label htmlFor className="quantity-title">
                                        Qty:{" "}
                                    </label>
                                    <div className="select-input">
                                        <select
                                            onchange="this.nextElementSibling.value=this.value"
                                            className="quantity"
                                        />
                                        <input
                                            type="number"
                                            defaultValue={1}
                                            className="quantity-text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="item-info-lg">
                                <div className="item-info-lg-col-1">
                                    <h3 className="info-lg-title">Bakset of Apple</h3>
                                    <p className="info-lg-paragraph">
                                        Lorem ipsum dolor sit amet, consetetur sadispscing elitr.
                                    </p>
                                </div>
                                <div className="item-info-lg-col-2">
                                    <button
                                        className="value-btn"
                                        onclick="decreaseValue()"
                                        id="decrease"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="number"
                                        defaultValue={1}
                                        className="quantity-text-lg"
                                    />
                                    <button
                                        className="value-btn"
                                        onclick="increaseValue()"
                                        id="increase"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-info-lg-col-3">
                                    <h3 className="item-info-number">N4,240</h3>
                                    <button className="remove-btn">
                                        <img src="./images/remove.svg" alt className="remove-img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <img src="./images/cocoa-reduced.png" alt className="item-img" />
                            <div className="cart-item-info">
                                <h3 className="item-info-number">N4,240</h3>
                                <p className="item-info-title">Cocoa Beans</p>
                                <div className="quantity-input">
                                    <label htmlFor className="quantity-title">
                                        Qty:{" "}
                                    </label>
                                    <div className="select-input">
                                        <select
                                            onchange="this.nextElementSibling.value=this.value"
                                            className="quantity"
                                        />
                                        <input
                                            type="number"
                                            defaultValue={1}
                                            className="quantity-text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="item-info-lg">
                                <div className="item-info-lg-col-1">
                                    <h3 className="info-lg-title">Bakset of Apple</h3>
                                    <p className="info-lg-paragraph">
                                        Lorem ipsum dolor sit amet, consetetur sadispscing elitr.
                                    </p>
                                </div>
                                <div className="item-info-lg-col-2">
                                    <button
                                        className="value-btn"
                                        onclick="decreaseValue()"
                                        id="decrease"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="number"
                                        defaultValue={1}
                                        className="quantity-text-lg"
                                    />
                                    <button
                                        className="value-btn"
                                        onclick="increaseValue()"
                                        id="increase"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-info-lg-col-3">
                                    <h3 className="item-info-number">N4,240</h3>
                                    <button className="remove-btn">
                                        <img src="./images/remove.svg" alt className="remove-img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <img src="./images/corn-reduced.png" alt className="item-img" />
                            <div className="cart-item-info">
                                <h3 className="item-info-number">N22,530</h3>
                                <p className="item-info-title">Corn Sack</p>
                                <div className="quantity-input">
                                    <label htmlFor className="quantity-title">
                                        Qty:{" "}
                                    </label>
                                    <div className="select-input">
                                        <select
                                            onchange="this.nextElementSibling.value=this.value"
                                            className="quantity"
                                        />
                                        <input
                                            type="number"
                                            defaultValue={1}
                                            className="quantity-text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="item-info-lg">
                                <div className="item-info-lg-col-1">
                                    <h3 className="info-lg-title">Bakset of Apple</h3>
                                    <p className="info-lg-paragraph">
                                        Lorem ipsum dolor sit amet, consetetur sadispscing elitr.
                                    </p>
                                </div>
                                <div className="item-info-lg-col-2">
                                    <button
                                        className="value-btn"
                                        onclick="decreaseValue()"
                                        id="decrease"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="number"
                                        defaultValue={1}
                                        className="quantity-text-lg"
                                    />
                                    <button
                                        className="value-btn"
                                        onclick="increaseValue()"
                                        id="increase"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-info-lg-col-3">
                                    <h3 className="item-info-number">N4,240</h3>
                                    <button className="remove-btn">
                                        <img src="./images/remove.svg" alt className="remove-img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <img src="./images/apple.png" alt className="item-img" />
                            <div className="cart-item-info">
                                <h3 className="item-info-number">N2,500</h3>
                                <p className="item-info-title">Basket Of Apple</p>
                                <div className="quantity-input">
                                    <label htmlFor className="quantity-title">
                                        Qty:{" "}
                                    </label>
                                    <div className="select-input">
                                        <select
                                            onchange="this.nextElementSibling.value=this.value"
                                            className="quantity"
                                        />
                                        <input
                                            type="number"
                                            defaultValue={1}
                                            className="quantity-text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="item-info-lg">
                                <div className="item-info-lg-col-1">
                                    <h3 className="info-lg-title">Bakset of Apple</h3>
                                    <p className="info-lg-paragraph">
                                        Lorem ipsum dolor sit amet, consetetur sadispscing elitr.
                                    </p>
                                </div>
                                <div className="item-info-lg-col-2">
                                    <button
                                        className="value-btn"
                                        onclick="decreaseValue()"
                                        id="decrease"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="number"
                                        defaultValue={1}
                                        className="quantity-text-lg"
                                    />
                                    <button
                                        className="value-btn"
                                        onclick="increaseValue()"
                                        id="increase"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-info-lg-col-3">
                                    <h3 className="item-info-number">N4,240</h3>
                                    <button className="remove-btn">
                                        <img src="./images/remove.svg" alt className="remove-img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total-lg">
                            <h3 className="total-title-lg">Total</h3>
                            <p className="total-number-lg">
                                <sup>N</sup>29,270
                            </p>
                        </div>
                        <div className="cart-shopping-lg">
                            <a href="/vendor-list" className="continue-shopping">
                                Continue Shopping <img src="./images/shopping-arrow.svg" alt />
                            </a>
                            <a href="/payment-page" className="start-shopping checkout-btn">
                                <img
                                    src="./images/shopping-cart-white.svg"
                                    alt
                                    className="start-shopping-img"
                                />
                                Check Out
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <div className="cart-total-numnbers">
                        <label htmlFor className="total-title">
                            Total
                        </label>
                        <p className="total-number">N29,270</p>
                    </div>
                    <a href="#" className="start-shopping checkout-btn">
                        <img
                            src="./images/shopping-cart-white.svg"
                            alt
                            className="start-shopping-img"
                        />
                        Check Out
                    </a>
                </div>
            </main>
        </>
    );
}

export default Cart;