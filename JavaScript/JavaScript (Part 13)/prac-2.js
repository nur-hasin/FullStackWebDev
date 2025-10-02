let url = "https://dog.ceo/api/breeds/image/random";
let btnEl = document.querySelector('button');

btnEl.addEventListener("click", async () => {
    let link = await getImage();
    let imgEl = document.querySelector('#res');
    imgEl.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;        
    } catch {
        return "No image found";
    }
}
