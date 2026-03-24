import "./App.css";
// import Title2 from './Title.jsx';
// import { Title } from "./Title.jsx";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
    <>
      {/* <div className="App"> */}
      <h2>This is my app component</h2>
      <p>inside app component we have: </p>
      {/* <Title2></Title2> */}
      <Title></Title>
      <Description />
      {/* <Title2></Title2> */}
      <Title></Title>
      <Description />
      <ProductTab></ProductTab>
      {/* </div> */}
    </>
  );
}

export default App;
