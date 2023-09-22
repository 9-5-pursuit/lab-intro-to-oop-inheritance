// Create class below
class Tamagotchi {    
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
    this.name = name
    this.energy = energy
    this.full = full
    this.mood = mood
    this.sick = sick
    this.rehomed = rehomed
}


greet(){
    console.log(`Hello, I'm ${this.name}!`);
}

status(){
    console.log(`My energy is ${this.energy}, I am this full ${this.full}, My mood is ${this.mood}, My sick status is ${this.sick}`);
}

eat(){
    this.full++
    this.full++
    this.energy--

    if(this.full > 10){
        this.sick = true
    }
}

medicate(){
    if(this.sick === true){
        this.full = 9
        this.energy--
        this.energy--
        this.energy--
        this.sick = false
    }else{
        console.log(`${this.name} is not sick!`);
        this.energy--
    }
}

play(){

    if(this.sick === true){
        console.log(`${this.name} is sick. Medicate them!`);
        this.energy--
        this.mood--
    }else if(this.mood > 9){
        console.log(`${this.name} is happy`);
        this.energy--
        this.energy--
        this.full--
    } else if(this.energy <= 3){
        console.log("I am too tired to play");
        this.energy--
    }else{
    this.mood++
    this.mood++
    this.energy--
    this.full--
    }
}

sleep(){
    this.energy++
    this.energy++
    this.energy++
    this.energy++
  
    this.full--
    this.full--
    this.full--
}

timePasses(){
    if(this.sick === false){
        this.mood--
        this.mood--
      
        this.full--
        this.energy--
    }else{
        this.mood--
        this.mood--
        this.mood--
        this.full--
        this.full--
        this.energy--
        this.energy--
    }
  console.log("time")
}

badGuardian(){
    if( this.energy <= 0 || this.mood <= 0 || this.full <= 0){
        console.log(`${this.name} has been rehomed`);
        this.rehomed = true
    }

}
}
// Do not edit below this line
module.exports = Tamagotchi;
