// Create class below
class Tamagotchi {
    constructor(name){
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet(){
        console.log(`Hello I'm ${this.name}!`)
    }

    status(){
        if (this.sick){
            console.log(`My mood is: ${this.mood}\n I am this full: ${this.full}\n My energy is: ${this.energy}\n I am not sick`)
        } else{
            console.log(
              `My mood is: ${this.mood}\n I am this full: ${this.full}\n My energy is: ${this.energy}\n I am sick`
            );
        }
    }

    eat(){
        this.full += 2;
        this.energy--;
        if (this.full > 10){
            this.sick = true
        }
    }

    medicate(){
        if(this.sick === true){
            this.full = 9;
            this.energy -= 3;
            this.sick = false 
        } else {
            this.energy--
            console.log(`${this.name} refused to take the medicine`)
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi;
