const Product = ({ item }) => {
    
    const addToCart = (i) => {
        console.log(i);
    }
    return (

        <div className="col-1-box">
            <img src={item.image} alt className="col-1-box-img" />
            <div className="col-1-box-info">
                <h4 className="col-1-title">{ item.name}</h4>
                <h6 className="col-1-sub-title">{ item.vendor}</h6>
                <p className="col-1-price">
                    N{item.price}
                </p>
            </div>
            <button onClick={addToCart(item)}className="btn add-to-cart">Add to Cart</button>
        </div>
    );
}

export default Product;


 