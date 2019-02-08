
class Card {
    constructor(card){
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      this.cardElement.setAttribute('style', 'display: flex');
    }
  
  }