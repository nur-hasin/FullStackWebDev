import "./Product.css";

function Product({ title, price = 300, features, features2, features3, features4, features5, features6 }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price / 2}</h5>
            <p>{features}</p>
            <p>{features2?.b}</p>
            <p>{features3?.join(", ")}</p>
            <p>{features4?.b}</p>
            <p>{features5}</p>
            <ul>
                {features6?.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
        </div>
    );
}

export default Product;
