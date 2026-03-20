// ══════════════════════════════════════════════════════════
// FILTER MODAL
// ══════════════════════════════════════════════════════════

// ── elements ──────────────────────────────────────────────
const fPriceMin = document.getElementById('fPriceMin');
const fPriceMax = document.getElementById('fPriceMax');
const fRangeMin = document.getElementById('fRangeMin');
const fRangeMax = document.getElementById('fRangeMax');
const fRangeFill = document.getElementById('fRangeFill');
const fClearAll = document.getElementById('fClearAll');
const fApply = document.getElementById('fApply');
const badge = document.getElementById('filterCountBadge');

const F_MAX = 50000;

// ── dual range slider ──────────────────────────────────────
function syncRange(origin) {
    let min = parseInt(fRangeMin.value);
    let max = parseInt(fRangeMax.value);
    const GAP = 500;

    if (min > max - GAP) {
        if (origin === 'min') min = max - GAP;
        else max = min + GAP;
        fRangeMin.value = min;
        fRangeMax.value = max;
    }

    fPriceMin.value = min;
    fPriceMax.value = max;

    const pMin = (min / F_MAX) * 100;
    const pMax = (max / F_MAX) * 100;
    fRangeFill.style.left = pMin + '%';
    fRangeFill.style.width = (pMax - pMin) + '%';
}

fRangeMin.addEventListener('input', () => syncRange('min'));
fRangeMax.addEventListener('input', () => syncRange('max'));

fPriceMin.addEventListener('input', () => {
    fRangeMin.value = fPriceMin.value;
    syncRange('min');
});

fPriceMax.addEventListener('input', () => {
    fRangeMax.value = fPriceMax.value;
    syncRange('max');
});

// init fill
syncRange('max');

// ── room counters ──────────────────────────────────────────
const counterState = { bedrooms: 0, beds: 0, bathrooms: 0 };

document.querySelectorAll('.counter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.counter;
        const dir = parseInt(btn.dataset.dir);

        counterState[key] = Math.max(0, counterState[key] + dir);
        document.getElementById('val-' + key).textContent = counterState[key];

        // toggle minus disabled
        const wrap = btn.closest('.counter-controls');
        const minuBtn = wrap.querySelector('[data-dir="-1"]');
        minuBtn.disabled = counterState[key] === 0;

        updateBadge();
    });
});

// ── property type chips (multi) ────────────────────────────
document.querySelectorAll('.type-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        updateBadge();
    });
});

// ── amenity checkboxes ─────────────────────────────────────
document.querySelectorAll('.amenity-label input[type="checkbox"]')
    .forEach(cb => cb.addEventListener('change', updateBadge));

// ── rating pills (single select) ──────────────────────────
document.querySelectorAll('.rating-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.rating-pill')
            .forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        updateBadge();
    });
});

// ── booking pills (multi) ──────────────────────────────────
document.querySelectorAll('.booking-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        pill.classList.toggle('selected');
        updateBadge();
    });
});

// ── language pills (multi) ────────────────────────────────
document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        pill.classList.toggle('selected');
        updateBadge();
    });
});

// ── count active filters → update badge ───────────────────
function updateBadge() {
    let count = 0;

    // price changed from default
    if (parseInt(fPriceMin.value) !== 500 ||
        parseInt(fPriceMax.value) !== 15000) count++;

    // counters
    Object.values(counterState).forEach(v => { if (v > 0) count++; });

    // chips / pills / checkboxes
    count += document.querySelectorAll('.type-chip.selected').length;
    count += document.querySelectorAll(
        '.amenity-label input[type="checkbox"]:checked').length;

    const rating = document.querySelector('.rating-pill.selected');
    if (rating && rating.dataset.rating !== 'any') count++;

    count += document.querySelectorAll('.booking-pill.selected').length;
    count += document.querySelectorAll('.lang-pill.selected').length;

    // show/hide badge
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('d-none');
    } else {
        badge.classList.add('d-none');
    }
}

// ── clear all ──────────────────────────────────────────────
fClearAll.addEventListener('click', () => {

    // price
    fRangeMin.value = 500;
    fRangeMax.value = 15000;
    syncRange('max');

    // counters
    Object.keys(counterState).forEach(key => {
        counterState[key] = 0;
        document.getElementById('val-' + key).textContent = 0;
        const minuBtn = document.querySelector(
            `[data-counter="${key}"][data-dir="-1"]`);
        if (minuBtn) minuBtn.disabled = true;
    });

    // chips
    document.querySelectorAll('.type-chip.selected')
        .forEach(c => c.classList.remove('selected'));

    // checkboxes
    document.querySelectorAll(
        '.amenity-label input[type="checkbox"]')
        .forEach(cb => cb.checked = false);

    // rating → reset to Any
    document.querySelectorAll('.rating-pill')
        .forEach(p => p.classList.remove('selected'));
    document.querySelector('.rating-pill[data-rating="any"]')
        .classList.add('selected');

    // booking + lang
    document.querySelectorAll('.booking-pill.selected, .lang-pill.selected')
        .forEach(p => p.classList.remove('selected'));

    updateBadge();
});

// ── apply ──────────────────────────────────────────────────
fApply.addEventListener('click', () => {

    const filters = {
        price: {
            min: parseInt(fPriceMin.value),
            max: parseInt(fPriceMax.value)
        },
        rooms: { ...counterState },
        propertyTypes: [...document.querySelectorAll('.type-chip.selected')]
            .map(c => c.querySelector('span').textContent.trim()),
        amenities: [...document.querySelectorAll(
            '.amenity-label input[type="checkbox"]:checked')]
            .map(cb => cb.value),
        rating: document.querySelector('.rating-pill.selected')
            ?.dataset.rating ?? 'any',
        bookingOptions: [...document.querySelectorAll('.booking-pill.selected')]
            .map(p => p.textContent.trim()),
        languages: [...document.querySelectorAll('.lang-pill.selected')]
            .map(p => p.textContent.trim())
    };

    console.log('Stayly filters →', filters);

    // send to backend:
    // const params = new URLSearchParams(filters).toString();
    // window.location.href = `/listings?${params}`;

    // close modal via Bootstrap API
    const modalEl = document.getElementById('filterModal');
    bootstrap.Modal.getInstance(modalEl)?.hide();
});