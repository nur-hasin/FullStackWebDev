import "./Product.css";

function Product({ title, price, features }) {
    // if (price > 400) {
    //     return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price: {price}</h5>
    //             <p>{features}</p>
    //             <p>return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price: {price}</h5>
    //             <p>{features}</p>
    //             <p>Discount of 5%</p>
    //         </div>
    //     );</p>
    //         </div>
    //     );
    // return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price: {price}</h5>
    //             <p>{features}</p>
    //             <p>Discount of 5%</p>
    //         </div>
    //     );
    let isDiscount = price > 400;
    let styles = { backgroundColor: isDiscount ? "lightcoral" : "lightgreen" };
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <p>{features}</p>
            {/* <p>{price > 400 ? "Discount of 5%" : ""}</p> */}
            {/* {price > 400 ? <p>Discount of 5%</p> : null} */}
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    );
}

export default Product;
