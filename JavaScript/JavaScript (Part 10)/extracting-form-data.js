let formEl = document.querySelector('form');

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(formEl);
    console.dir(formEl.elements);
    console.dir(formEl.elements[0]);
    console.dir(formEl.elements[1]);
    console.dir(formEl.elements[2]);
    
    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
