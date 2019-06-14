var health = 100;
var hits = 0;

var ryu = {

}
var ken = {

}


//attacks
function punch (){
    health = health - 6;
    console.log(health)
    update() 
}
function kick (){
    health = health - 8;
    console.log(health)
    update()
}
function hado (){
    health = health - 12;
    console.log(health)
    update()
}
function tatsu (){
    health = health - 22;
    console.log(health)
    update()
}
function shoryu (){
    health = health - 32;
    console.log(health)
    update()
}
//value displays
let healthUpdatePlayerOne = document.querySelector("#health-1")
let healthUpdatePlayerTwo = document.querySelector("#health-2")

//display
function update (){
   healthUpdatePlayerOne.innerHTML = health;
   healthUpdatePlayerTwo.innerHTML = health;
}
//initialize
update()