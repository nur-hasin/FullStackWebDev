import Product from "./Product2.jsx";

function ProductTab() {
    return (
        <>
            <Product title="Phone" price={599.99} ></Product>
            <Product title="Laptop" price={999.99} ></Product>
            <Product title="Tablet" price={300.99}></Product>
        </>
    );
}

export default ProductTab;
