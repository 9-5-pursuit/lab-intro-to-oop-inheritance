// Create class below


class tamagotchi{
    constructor(name,energy=9,full=8,mood=6,sick=false,rehomed=false){
        this.name=name
        this.energy=energy
        this.full=full
        this.mood=mood
        this.sick=sick
        this.rehomed=rehomed
    }
    greet(){
        return console.log(`Hello, I'm ${this.name}`)

    }
    status(){
        return console.log(`My energy level  is a:${this.energy},I am this full:${this.full} my mood level is :${this.mood}${this.sick?'I am sick':'I am not Sick'}`)

    }
    eat(){
        

    }
    medicate(){

    }
    play(){

    }
    sleep(){

    }
    timePasses(){

    }
    badGuardian(){

    }







}

// Do not edit below this line
module.exports = Tamagotchi;
