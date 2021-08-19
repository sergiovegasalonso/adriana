window.onload = function () {

    // Consts and variables
    const firstAnimationMsDuration = 3000;
    const body = document.querySelector('body');
    const backdrop = document.querySelector('div.backdrop');

    // When first animation ends...we must remove backdrop
    setTimeout(function () {
        body.style.overflowY = 'scroll';
        backdrop.parentNode.removeChild(backdrop);
    }, firstAnimationMsDuration);

    // Arrow animations
    let inPageTop = true;
    const portfolio = document.querySelector('.portfolio');
    let arrow = document.querySelector('.arrow');
    let arrowRigth = document.querySelector('.arrow > .right');
    let arrowLeft = document.querySelector('.arrow > .left');

    function addArrowToTopAnimation() {
        arrowRigth.classList.remove('right-to-bottom');
        arrowLeft.classList.remove('left-to-bottom');
        arrowRigth.classList.add('right-to-top');
        arrowLeft.classList.add('left-to-top');
    }

    function addArrowToBottomAnimation() {
        arrowRigth.classList.remove('right-to-top');
        arrowLeft.classList.remove('left-to-top');
        arrowRigth.classList.add('right-to-bottom');
        arrowLeft.classList.add('left-to-bottom');
    }

    arrow.addEventListener('click', function () {
        if (inPageTop) {
            window.scroll(0, portfolio.offsetHeight);
        } else {
            window.scroll(0, 0);
        }
    });

    window.addEventListener('scroll', function (e) {
        if (window.scrollY === 0) {
            inPageTop = true;
            addArrowToBottomAnimation();
        } else {
            inPageTop = false;
            addArrowToTopAnimation();
        }
    });
};