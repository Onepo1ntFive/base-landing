(function () {

    let lazyImages = document.querySelectorAll('.lazy');
    setTimeout(function () {
        Array.prototype.forEach.call(lazyImages, function (el, i) {
            el.setAttribute('src', el.dataset.src);
            el.classList.remove('lazy');

            let pic = el.parentNode;
            let picSource = pic.querySelectorAll('source');

            Array.prototype.forEach.call(picSource, function (source, i) {
                console.log(source.dataset.srcset)
                source.setAttribute("srcset", source.dataset.srcset);
            });
        });
    }, 1000);

})();