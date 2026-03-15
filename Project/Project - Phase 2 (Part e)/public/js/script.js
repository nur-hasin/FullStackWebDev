// prevents submit if invalid
(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        });
    });
})();

// flash message auto-dismiss
setTimeout(() => {
    const alerts = document.querySelectorAll('.flash-alert');

    alerts.forEach(alert => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 500);
    });
}, 5000);