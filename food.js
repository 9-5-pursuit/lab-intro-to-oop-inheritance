// Create class below


// here I created my food class
class Food{

    constructor(name,daysToSpoil,fresh=true){//adding constructor and attributes
            this.name=name
            this.daysToSpoil=daysToSpoil
            this.fresh=fresh


    }
    //here I am adding my first method 
    isFresh(){
        if(this.fresh===true){

            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`)
        }else if(this.daysToSpoil<=0){
            console.log(`${this.name} had spoiled.`)

        }

    }

    //here I am adding my second method
    aDayPasses(){

        this.daysToSpoil -= 1
        this.isFresh()
       
    }

    //here i forgot to add days to spoil not sure if order matters in the stack i figured the conditions should be met first so you know if the food is fresh before preparataion 
    prepare(){
        console.log(`${this.name} is being prepared`)
    }



}
// Do not edit below this line
module.exports = Food;
