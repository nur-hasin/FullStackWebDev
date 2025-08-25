let formEl = document.querySelector('form');

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    console.log("form submitted");
});
