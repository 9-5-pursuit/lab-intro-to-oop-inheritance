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
        }

    }



}
// Do not edit below this line
module.exports = Food;
