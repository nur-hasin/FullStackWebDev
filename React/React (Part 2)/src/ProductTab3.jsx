import Product from "./Product3.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    };
    return (
        <div style={styles}>
            <Product title="Logitech MX Master 3S" idx={0}></Product>
            <Product title="Apple Pencil (2nd Gen)" idx={1}></Product>
            <Product title="Zebronics Zeb-Transformer" idx={2}></Product>
            <Product title="Portronics Toad 23 Wireless Mouse" idx={3}></Product>
        </div>
    );
}

export default ProductTab;
