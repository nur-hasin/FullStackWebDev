import Price from "./Price.jsx";

function Product({ title, idx }) {
    let styles = {
        border: "2px solid #e0c367",
        borderRadius: "10px",        
        textAlign: "center",
        width: "250px",
        height: "185px",
    };
    let description = [["8,000 DPI", "High Precision"], ["Rechargeable", "Long Battery Life"], ["Ergonomic Design", "Comfortable Grip"], ["Compatible with Windows and Mac", "Bluetooth Connectivity"]];
    let oldPrice = [180, 350, 555, 1200];
    let newPrice = [100, 200, 300, 800];
    return (
        <div style={styles}>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    );
}

export default Product;
