document.addEventListener('DOMContentLoaded', function() {
    const indicatorButtons = document.querySelectorAll('.btn[data-bs-target="#phoneCarousel"]');

    function resetButtonStates() {
        indicatorButtons.forEach(btn => {
            btn.classList.remove(
                'border', 'border-3', 
                'digi-bg-color-blue-subtle', 'digi-border-color-blue',
                'digi-bg-color-green-subtle', 'digi-border-color-green',
                'digi-bg-color-orange-subtle', 'digi-border-color-orange',
                'digi-bg-color-red-subtle', 'digi-border-color-red'
            );

            const title = btn.querySelector('.digi-p2');
            const description = btn.querySelector('.digi-p3');

            if (title && description) {
                title.classList.remove('font-noto-sans-bold', 'digi-p2-bold');
                description.classList.remove('digi-p3-bold');
                description.classList.add('font-noto-sans-regular'); 
            }
        });
    }

    indicatorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            resetButtonStates();

            const color = btn.getAttribute('digi-data-color');

            if (color) {
                btn.classList.add(`digi-bg-color-${color}-subtle`, `digi-border-color-${color}`, 'border', 'border-3');
            }

            const title = btn.querySelector('.digi-p2');
            const description = btn.querySelector('.digi-p3');

            if (title && description) {
                title.classList.add('font-noto-sans-bold', 'digi-p2-bold');
                description.classList.add('font-noto-sans-regular', 'digi-p3-bold');
            }
        });
    });

    indicatorButtons[0].click();
});