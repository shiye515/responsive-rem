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

        // 主要解决0.5像素边框的问题，所以dpr超过2边框就太细了
        var dpr = Math.min(window.devicePixelRatio, 2);

        var scale = 1 / dpr;

        metaEl.setAttribute('content', [
            'initial-scale=',
            scale,
            ', maximum-scale=',
            scale,
            ', minimum-scale=',
            scale,
            ', user-scalable=yes' // setUseWideViewport(true)和user-scalable=no 冲突？待验证
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
            docEl.style.fontSize = width * percent + 'px';
        }
        setRootSize();
        window.addEventListener('resize', setRootSize);
    }
    return rrem
});
