

//characters

var ryu = {
    health: 100,
    attacks: {
      kick: 20,
      punch: 10,
      shoryu: 25,
      hadoken: 25,
      grab: 20,
      attackModifier:[]
    }
}

var ken = {
    health: 100,
    attacks: {
        kick: 15,
        punch: 15,
        shoryu: 30,
        hadoken: 20,
        tatsu: 22,
        grab: 20,
        attackModifier:[]
    }
}

//attack modifiers

var modifiers = {
    medium: {name: 'Medium', modifier: 3/2, description: 'Medium Attack'},
    heavy: {name: 'Heavy', modifier: 2, description: 'Heavy Attack'},
    ex: {name: 'EX', modifier: 3, description: 'EX Power Up'}
}

function pushModifiers(char, mod){
    if (mod == medium){
        mod = modifiers.medium;
    }
    if (mod == heavy){
        mod = modifiers.heavy;
    }
    if(mod == ex){
        mod = modifiers.ex;
    }
    if (char == ken){
        mod.push(ken.attackModifier)
        console.log(ken.attackModifier)
    }
    else{
        mod.push(ryu.attackModifier)
        console.log(toString(ryu.attackModifier))
    }
}


//attacks functions
function punch(character){
    if (character == ken){
        ken.health = ken.health - ryu.attacks.punch;
    }
    else{
        ryu.health = ryu.health - ken.attacks.punch;
    }
    update() 
}

function kick (character){
    if (character == ken)
    ken.health = ken.health - ryu.attacks.kick;
    else {
        ryu.health = ryu.health - ken.attacks.kick;
    }
    update()
}

function hado (character){
    if (character == ken)
    ken.health = ken.health - ryu.attacks.hadoken;
    else {
        ryu.health = ryu.health - ken.attacks.hadoken;
    }
    update()
}

function tatsu (character){
    if (character == ken)
    ken.health = ken.health - ryu.attacks.tatsu;
    else {
        ryu.health = ryu.health - ken.attacks.tatsu;
    }
    update()
}

function shoryu (character){
    
    if (character == ken)
    ken.health = ken.health - ryu.attacks.shoryu;
    else {
        ryu.health = ryu.health - ken.attacks.shoryu;
    }
    update()
}

//value displays
let healthUpdatePlayerOne = document.querySelector("#ryu")
let healthUpdatePlayerTwo = document.querySelector("#ken")
let modifierPlayerOne = document.querySelector("#ryu-attack")
let modifierPlayerTwo = document.querySelector("#ken-attack")

//display
function update (){
   healthUpdatePlayerOne.innerHTML = ryu.health;
   healthUpdatePlayerTwo.innerHTML = ken.health;
   modifierPlayerOne.innerHTML= ryu.attackModifier;
   modifierPlayerTwo.innerHTML= ken.attackModifier;
    
   if (ryu.health <= 0){
    healthUpdatePlayerOne.innerHTML = 0;
   }
   if (ken.health <= 0){
    healthUpdatePlayerTwo.innerHTML = 0;
   }
  
}
//initialize
update()
console.log(ryu.attackModifier[0])