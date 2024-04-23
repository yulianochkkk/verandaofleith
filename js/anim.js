document.addEventListener('DOMContentLoaded', () => {
    const animItems = document.querySelectorAll('._animitems');

    function animOnScroll() {
        animItems.forEach(animItem => {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = animItem.getBoundingClientRect().top + window.pageYOffset;
            const animStart = 8;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / (animStart/2);
            }

            const windowHeight = window.innerHeight;
            const pageBottom = window.pageYOffset + windowHeight;

            if (window.pageYOffset > animItemOffset - animItemPoint && animItemOffset < pageBottom) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        });
    }

    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
});

