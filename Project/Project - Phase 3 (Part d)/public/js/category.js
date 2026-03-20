// ── defer already guarantees DOM is ready — no DOMContentLoaded needed ──

const container = document.querySelector('.category-scroll');
const wrapper = document.querySelector('.category-wrapper');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const items = document.querySelectorAll('.category-item');

// guard
if (!container || !wrapper || !leftBtn || !rightBtn) {
    console.error('Category: element missing', {
        container: !!container,
        wrapper: !!wrapper,
        leftBtn: !!leftBtn,
        rightBtn: !!rightBtn
    });
} else {

    const SCROLL_AMOUNT = 260;

    // ── arrow visibility ──────────────────────────────────────
    function updateArrows() {
        const sl = Math.round(container.scrollLeft);
        const maxScroll = Math.round(container.scrollWidth - container.clientWidth);

        const atStart = sl <= 2;
        const atEnd = maxScroll <= 0 || sl >= maxScroll - 2;

        leftBtn.classList.toggle('hidden', atStart);
        wrapper.classList.toggle('hide-left', atStart);

        rightBtn.classList.toggle('hidden', atEnd);
        wrapper.classList.toggle('hide-right', atEnd);
    }

    // ── scroll buttons ────────────────────────────────────────
    leftBtn.addEventListener('click', () => {
        container.scrollLeft -= SCROLL_AMOUNT;
        setTimeout(updateArrows, 350);
    });

    rightBtn.addEventListener('click', () => {
        container.scrollLeft += SCROLL_AMOUNT;
        setTimeout(updateArrows, 350);
    });

    // ── on scroll ─────────────────────────────────────────────
    container.addEventListener('scroll', updateArrows, { passive: true });

    // ── on resize ─────────────────────────────────────────────
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateArrows, 120);
    });

    // ── initial check ─────────────────────────────────────────
    requestAnimationFrame(() => requestAnimationFrame(updateArrows));

    // ── active item on click ──────────────────────────────────
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}