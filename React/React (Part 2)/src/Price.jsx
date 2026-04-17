export default function Price({ oldPrice, newPrice }) {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "#e0c367",
        marginTop: "30px",
        height: "41px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
    }
    let oldStyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>${oldPrice}</span>
            <span style={newStyles}>${newPrice}</span>
        </div>
    );
}
