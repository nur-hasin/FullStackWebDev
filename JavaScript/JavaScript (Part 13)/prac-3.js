let url = 'http://universities.hipolabs.com/search?name=';
let btnEl = document.querySelector('button');

btnEl.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    let clgArr = await getColleges(country);
    showClg(clgArr);
});

function showClg(clgArr) {
    let ulEl = document.querySelector('#list');
    ulEl.innerHTML = '';

    for (const clg of clgArr) {
        let liEl = document.createElement('li');
        liEl.innerText = clg.name;
        ulEl.appendChild(liEl);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log("ERROR - ", err);
        return [];
    }
}

