;(function (window, undefined) {
    "use strict";

    var preventTouchBounce = function()
    {
        var xStart, yStart = 0;

        document.addEventListener('touchstart',function(e) {
            xStart = e.touches[0].screenX;
            yStart = e.touches[0].screenY;
        });

        document.addEventListener('touchmove',function(e) {
            var xMovement = Math.abs(e.touches[0].screenX - xStart);
            var yMovement = Math.abs(e.touches[0].screenY - yStart);
            if((yMovement * 3) > xMovement) {
                if(allowPreventTouch) e.preventDefault();
            }
        });
    };

    window.preventTouchBounce = preventTouchBounce;
})(window);