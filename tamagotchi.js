// Create class below
class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed){
    this.name = name
    this.energy = energy || 9
    this.full = full || 8
    this.mood = mood || 6
    this.sick = sick || false
    this.rehomed = rehomed || false
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log(`******************\nMy Mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\n${this.sick?`I am sick`: `I am not sick`}\n******************`)
    }
    eat(){
        this.full+=2
        this.energy--
        if (this.full>10)
        this.sick=true
    }
    medicate(){
        if (this.sick){
            this.full=9
            this.energy-=3
            this.sick=false
        } else {
            console.log(`No medicine please`)
            this.energy--
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
