
(function () {

    //top menu scroll to
    const menuLinks = document.querySelectorAll('.js-head-menu a');

    Array.prototype.forEach.call(menuLinks, function (el, i) {
        el.addEventListener('click', () => {
            // event.preventDefault();
            let menuTarget = el.getAttribute('href');
            let menuTargetBlock = document.querySelector(menuTarget);

            scrollIt(menuTargetBlock, 1000);
        });
    });

})();