import DarkHeader from "../components/store-components/DarkHeader";
import { StoreContext } from "../context/StoreContext"
import { useContext, useEffect } from "react"
import StoreContextProvider from "../context/StoreContext";
const products = [
    {
        id: 1,
        name: "Apple",
        vendor: "Nature Valley Agro",
        price: "100",
        image: "./images/apple.png"
    },
    {
        id: 2,
        name: "Cocoa Beans",
        vendor: "Kithekani Farms",
        price: "1,340",
        image: "./images/cocoa-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."

    },
    {
        id: 3,
        name: "Corn",
        vendor: "Della Royale Farms",
        price: "3700",
        image: "./images/corn-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


    },
    {
        id: 4,
        name: "Potatoes",
        vendor: "Aisha Goods",
        price: "100",
        image: "./images/fresh-potatoes-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


    },
    {
        id: 5,
        name: "Brocolli",
        vendor: "John and John Farm",
        price: "4000",
        image: "./images/broccoli-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


    },
    {
        id: 6,
        name: "Apple",
        vendor: "Rhamon Store",
        price: "200",
        image: "./images/apple.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


    },
    {
        id: 7,
        name: "Cocoa Beans",
        vendor: "John and John Farm",
        price: "1340",
        image: "./images/cocoa-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


    },
    {
        id: 8,
        name: "Corn",
        vendor: "Ade Farmer's Place",
        price: "2700",
        image: "./images/corn-reduced.png",
        description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."

    },
]

const CartComponent = () => {
    const [cart, setCart] = useContext(StoreContext);
    const addToCart = (item) => {
        setCart(curr => [...curr, item])
        console.log(cart);
    }

    const removeFromCart = (item) => {
        setCart(tempCart)
        console.log(tempCart);
    }

    const total = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    useEffect(() => {
    setCart([
        {
            id: 1,
            name: "Apple",
            vendor: "Nature Valley Agro",
            price: "2500",
            image: "./images/apple.png",
            description: "A basket containing 20 apples"
        },
        {
            id: 2,
            name: "Cocoa Beans",
            vendor: "Kithekani Farms",
            price: "1340",
            image: "./images/cocoa-reduced.png",
            description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."

        },
        {
            id: 3,
            name: "Corn",
            vendor: "Della Royale Farms",
            price: "3700",
            image: "./images/corn-reduced.png",
            description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


        },
        {
            id: 4,
            name: "Potatoes",
            vendor: "Aisha Goods",
            price: "100",
            image: "./images/fresh-potatoes-reduced.png",
            description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


        },
        {
            id: 5,
            name: "Brocolli",
            vendor: "John and John Farm",
            price: "4000",
            image: "./images/broccoli-reduced.png",
            description: "  Lorem ipsum dolor sit amet, consetetur sadispscing elitr."


        },
   
    ])
    console.log("called useeffect",cart); 
    // console.log(cart);
    },[])
    const CartItem = ({ item }) => {
        return (
            <div className="cart-item">
                <img src={item.image} alt className="item-img" />
                <div className="cart-item-info">
                    <h3 className="item-info-number">{item.price}</h3>
                    <p className="item-info-title">{item.name}</p>
                    <div className="quantity-input">
                        <label htmlFor className="quantity-title">
                            Qty:{item.quantity}
                        </label>
                        <div className="select-input">
                            <select
                                onchange="this.nextElementSibling.value=this.value"
                                className="quantity"
                            />
                            <input type="number" defaultValue={1} className="quantity-text" />
                        </div>
                    </div>
                </div>
                <div className="item-info-lg">
                    <div className="item-info-lg-col-1">
                        <h3 className="info-lg-title"></h3>
                        <p className="info-lg-paragraph">
                            {item.description}
                        </p>
                    </div>
                    <div className="item-info-lg-col-2">
                        <button className="value-btn" onclick="decreaseValue()" id="decrease">
                            -
                        </button>
                        <input
                            type="number"
                            id="number"
                            defaultValue={1}
                            className="quantity-text-lg"
                        />
                        <button className="value-btn" onclick="increaseValue()" id="increase">
                            +
                        </button>
                    </div>
                    <div className="item-info-lg-col-3">
                        <h3 className="item-info-number">N{item.price}</h3>
                        <button className="remove-btn" onClick={()=>removeFromCart(item)}>
                            <img src="./images/remove.svg" alt className="remove-img" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <StoreContextProvider>
            <DarkHeader />
            <main>
                <div className="main-grid cart-grid">
                    <div className="cart-block">
                        <h3 className="title cart-block-title">Cart</h3>
                        <p className="paragraph cart-block-paragraph">
                            {cart.length} Items: Cart Total{" "}
                            <span className="cart-number">
                                &#8358; {total}
                            </span>
                        </p>
                    </div>
                    <div className="carts">
                        {cart.map(item => {
                            return (
                                <CartItem item={item} key={item.id} />
                            )
                        })}
                        <div className="cart-total-lg">
                            <h3 className="total-title-lg">Total</h3>
                            <p className="total-number-lg">
                                &#8358;{total}
                            </p>
                        </div>
                        <div className="cart-shopping-lg">
                            <a href="#" className="continue-shopping">
                                Continue Shopping <img src="./images/shopping-arrow.svg" alt />
                            </a>
                            <a href="#" className="start-shopping checkout-btn">
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
                        <p className="total-number">&#8358 {total}</p>
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
        </StoreContextProvider>
    );
}

export default CartComponent;