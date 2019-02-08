
class ArrowNav {
    constructor(arrow){
        this.arrow = arrow;

        this.arrowData = this.arrow.dataset.tab; //stores a string with the id of next card
        console.log(this.arrowData);
    }
}

let arrows = document.querySelectorAll('.arrow').forEach(arrow => new ArrowNav(arrow));
console.log