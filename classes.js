// // Classes
// class Pizza{
//     constructor(pizzaType , pizzaSize){
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "Thick"
//     }
    

//     bake(){
//         console.log(`Baking a ${this.size} ${this.type} toppings with ${this.crust} crust pizza`);
//     }
// }

// const myPizza = new Pizza("Chicken" , "8 inch");

// myPizza.bake();

/* Factory Funnction!! */

// function pizzaFactory(pizzaSize){
//     const crust = "Original";
//     const size = pizzaSize;
//     return{
//         bake : () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// };

// const myPizza = pizzaFactory("8 inch");
// myPizza.bake();

/**
 *The Class of pizzas 
*/

// class Pizza{
//     constructor(pizzaSize){
//         this.size = pizzaSize;
//         this.crust = "Original";
//     }

//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
// }

// class SpecialityPizza extends Pizza {
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Chicken ";
//     }
    
//     slice(){
//         console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
//     }

// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice();


/*
class Pizza{
    crust = "Original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize;
        
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo(){
        console.log(`Here's our ${this.crust} ${this.#sauce} sauce ${this.#size} pizza `);
    }
}

const myPizza = new Pizza("Large");
myPizza.hereYouGo(); 
*/