function initCustomDateInputs() {
    document.querySelectorAll('.date-hidden-input').forEach(input => {

        if (input._dateInited) return;
        input._dateInited = true;

        const wrap = input.closest('.date-input-wrap');
        const display = wrap ? wrap.querySelector('.date-display') : null;
        if (!wrap || !display) return;

        function formatDate(val) {
            if (!val) return null;
            const [y, m, d] = val.split('-');
            const months = ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec'];
            return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
        }

        function getPlaceholder() {
            return input.name.includes('checkout') ? 'End date' : 'Start date';
        }

        function updateDisplay() {
            const formatted = formatDate(input.value);
            if (formatted) {
                display.textContent = formatted;
                wrap.classList.add('has-value');
            } else {
                display.textContent = getPlaceholder();
                wrap.classList.remove('has-value');
            }
        }

        // ✅ clicking wrap triggers hidden input
        wrap.addEventListener('click', () => {
            input.showPicker
                ? input.showPicker()
                : input.click();
        });

        input.addEventListener('change', updateDisplay);
        input.addEventListener('input', updateDisplay);

        updateDisplay();
    });
}

initCustomDateInputs();

document.addEventListener('shown.bs.collapse', () => {
    initCustomDateInputs();
});