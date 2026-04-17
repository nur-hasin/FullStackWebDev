import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  let options3 = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
    return (
      <>
        <Product title="Phone" price={599.99} features={options}></Product>
        <Product title="Laptop" price={999.99} features2={options2}></Product>
        <Product title="Tablet" features3={["hi-tech", "durable"]}></Product>
        <Product title="Watch" features4={{ a: "durable", b: "fast" }}></Product>
        <Product title="Headphones" features5={options3}></Product>
        <Product title="Speaker" features6={options}></Product>
      </>
    );
}

export default ProductTab;
