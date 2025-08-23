const oldImgObj = document.getElementsByClassName('oldImg');

console.log(oldImgObj);

for (let i = 0; i < oldImgObj.length; i++) {
    console.dir(oldImgObj[i]);
}

for (let i = 0; i < oldImgObj.length; i++) {
    oldImgObj[i].src = "assets/creation_2.jpeg";
    console.log(`value of image no. ${i} is changed`);
}