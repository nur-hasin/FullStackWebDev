let url = "https://catfact.ninja/fact";
let btnEl = document.querySelector('button');

btnEl.addEventListener("click", async () => {
    let fact = await getFact();
    let pEl = document.querySelector('#res');
    pEl.innerText = fact;
});

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch {
        return "No fact found";
    }
}
