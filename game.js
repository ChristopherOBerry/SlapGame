var health = 100;

let name;
let hits = 0;

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
let healthUpdatePlayerOne = document.querySelector("#health-1")
let healthUpdatePlayerTwo = document.querySelector("#health-2")


function update (){
   healthUpdatePlayerOne.innerHTML = health;
   healthUpdatePlayerTwo.innerHTML = health;
}
update()