/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

// Fahrenheit to Celsius and vice-versa
let to_fahrenheit = +prompt("Please insert a temperature in Celsius");

console.log(`${to_fahrenheit}° Celsius is equal to ${Math.round((to_fahrenheit*9/5)+32)}° Fahrenheit`)

let to_celsius = +prompt("Please insert a temperature in Fahrenheit");

console.log(`${to_celsius}° Fahrenheit is equal to ${Math.round((to_celsius-32)*5/9)}° Celsius`)

// Rolling stats!
console.log("Here are your stats using the 'roll 3d6' method!")
let roll_str = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
let roll_dex = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
let roll_con = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
let roll_int = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
let roll_wis = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
let roll_cha = Math.ceil((Math.random()*6)+(Math.random()*6)+(Math.random()*6))
// There's probably a better way of doing this... But this is what I've got for now
// Wish I knew how to do 4d6 drop lowest... :(

console.log(`Your stats are
STR: ${roll_str} DEX: ${roll_dex} CON: ${roll_con}
INT: ${roll_int} WIS: ${roll_wis} CHA: ${roll_cha}`)

// Oh boy oh boy it's dice time
console.log("Here is a random result from every common die used in Dungeons & Dragons!")
 let flip_coin = Math.ceil(Math.random()*2)
 let roll_d4 = Math.ceil(Math.random()*4)
 let roll_d6 = Math.ceil(Math.random()*6)
 let roll_d8 = Math.ceil(Math.random()*8)
 let roll_d10 = Math.ceil(Math.random()*10)
 let roll_d12 = Math.ceil(Math.random()*12)
 let roll_d20 = Math.ceil(Math.random()*20)
 let roll_d100 = Math.ceil(Math.random()*100)
 // Why would you do a +1 on the end when you can just put it to Math.ceil? Does the exact same thing
 // This looks less cluttered to me (though I guess my stat roller was pretty cluttered...)

 console.log(`Your rolls are...
 coin/d2: ${flip_coin} d4: ${roll_d4} d6: ${roll_d6} d8: ${roll_d8}
 d10: ${roll_d10} d12: ${roll_d12} d20: ${roll_d20} d100: ${roll_d100}`)
// Yahoo
