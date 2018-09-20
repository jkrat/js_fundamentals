// class Ninja {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         var speed = 3;
//         var strength = 3;
//         this.getStrength = function() {
//             return {
//                 'strength': strength,
//                 'speed': speed
//             }
//         };
//     }

//     sayName() {
//         console.log(this.name);
//     }

//     showStats() {
//         var stats = {
//             'name': this.name,
//             'health': this.health,
//             'speed': this.getStrength()['speed'],
//             'strength': this.getStrength()['strength']
//         }
//         console.log(stats);
//     }

//     drinkSake() {
//         this.health += 10;
//     }
//     punch(ninja) {
//         ninja.health -= 5;
//         console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`);
//     }     
//     kick(ninja) {
//         var strength = this.getStrength()['strength'];
//         var damage = strength * 15;
//         ninja.health -= damage;
//         console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} Health!`);
//     }


// }

// var ninja1 = new Ninja("jim");
// var ninja2 = new Ninja("tim");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.kick(ninja2);

class Ninjas {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        var stats = {
            'name': this.name,
            'health': this.health,
            'speed': this.speed,
            'strength': this.strength
        }
        console.log(stats);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninjas {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("wise things");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();







