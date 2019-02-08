
class ArrowNav {
    constructor(arrows){
        this.arrowRight = arrows.right;
        this.arrowLeft = arrows.left;
    }
}

 (function($) {
        $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
    }(jQuery));



let Arrows = {
    left: document.querySelector('.arrow-left'),
    right: document.querySelector('.arrow-right')
}
