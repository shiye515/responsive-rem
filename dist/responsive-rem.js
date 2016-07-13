;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.rrem = factory();
    }
})(this, function () {
    var defaultOpt = {
        designWidth: 750,
        remSize: 10
    };

    function rrem(designWidth, remSize) {
        designWidth = designWidth || defaultOpt.designWidth;
        remSize = remSize || defaultOpt.remSize;
        var percent = remSize / designWidth;

        var doc = window.document;
        var docEl = doc.documentElement;
        var metaEl = doc.querySelector('meta[name="viewport"]');
        if (!metaEl) {
            metaEl = doc.createElement('meta');
            metaEl.setAttribute('name', 'viewport');
        }

        var dpr = window.devicePixelRatio;
        var scale = 1 / dpr;

        metaEl.setAttribute('content', [
            'width=device-width,initial-scale=',
            scale,
            ', maximum-scale=',
            scale,
            ', minimum-scale=',
            scale,
            ', user-scalable=no'
        ].join(''));

        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }

        function setRootSize() {
            var width = docEl.getBoundingClientRect().width;
            docEl.style.fontSize = width * percent * dpr + 'px';
        }
        setRootSize();
        window.addEventListener('resize', setRootSize);
    }
    return rrem
});
