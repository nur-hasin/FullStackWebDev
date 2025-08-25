let formEl = document.querySelector('form');

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
});

let user = document.querySelector('#user');

user.addEventListener('input', function () {
    console.log(`final value: ${this.value}`);
});

