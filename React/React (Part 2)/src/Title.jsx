function Title() {
  let name = "hasin";
  return (
    <div>
      <p>2 * 2 = {2 * 2}</p>
      <h1>I am the Title!</h1>
      <p>Hi, {name.toUpperCase()}</p>
    </div>
  );
}

function Sum(a, b) {
  return a + b;
}

export default Title;
// export {Title, Sum};
// export { Title };
