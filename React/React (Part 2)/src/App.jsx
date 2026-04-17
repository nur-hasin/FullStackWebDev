import "./App.css";
// import ProductTab from "./ProductTab.jsx";
import ProductTab2 from "./ProductTab2.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Alice" textColor="blue" />
      <MsgBox userName="Bob" textColor="green" />
      <ProductTab2></ProductTab2>
    </>
  );
}

export default App;
