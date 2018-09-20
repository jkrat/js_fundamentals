class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        var suits = ["heart", "spade", "club", "diamond"];
        var name;
        for (var suit of suits) {
            for (var i = 2; i <= 14; i ++) {
                if (i == 11){
                    name = "jack";
                } else if (i == 12){
                    name = "queen";
                } else if (i == 13){
                    name = "king";
                } else if (i == 14){
                    name = "ace";
                } else {
                    name = i;
                }
                this.deck.push(new Card(suit, name, i));
            }
        }
    }
    shuffle() {
        var temp;
        var rnd;
        for (var i = 0; i < 52; i++) {
            temp = this.deck[i];
            rnd = Math.floor(Math.random() * 52);
            this.deck[i] = this.deck[rnd];
            this.deck[rnd] =  temp;
        }
        return this.deck;
    }
    deal() {
        // console.log(this.deck.pop());
        return this.deck.pop();
    }
    display() {
        console.log(this.deck);
        return this.deck;
    }
    reset() {
        deck1 = new Deck;
        this.display(deck1);
    }
};

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    takeCard(deck) {
        this.hand.push(deck.deal());
        console.log(this.hand)
        return this.hand;
    }
    discard(index) {
        this.hand[index] = this.hand.pop();
        console.log(this.hand);
        return this.hand;
    }
};
 
var deck1 = new Deck;
var player = new Player('Jim');
deck1.shuffle();
player.takeCard(deck1);
player.takeCard(deck1);
player.takeCard(deck1);
player.takeCard(deck1);
player.takeCard(deck1);


