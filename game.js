

//characters

var ryu = {
    health: 100,
    attacks: {
      kick: 20,
      punch: 10,
      shoryu: 25,
      hadoken: 22,
      tatsu:30,
      grab: 20,
    },
    attackModifier:["None"]
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
    },
    attackModifier:["None"]
}

//attack modifiers


var modifiers = {
    light: {name: 'Light', modifier: 1, description: 'Light Attack'},
    medium: {name: 'Medium', modifier: 3/2, description: 'Medium Attack'},
    heavy: {name: 'Heavy', modifier: 2, description: 'Heavy Attack'},
    ex: {name: 'EX', modifier: 5/2, description: 'EX Power Up'}
}

let damageBonus = 1;

function pushModifiers(char, mod){
    if (char == ken && mod == 0){
        mod = modifiers.light.name
        ryu.attackModifier.push(mod)
        
        
    }
    if (char == ken && mod == 1){
        mod = modifiers.medium.name
        ryu.attackModifier.push(mod)
        damageBonus = modifiers.medium.modifier
        
        
    }
    if (char == ken && mod == 2){
        mod = modifiers.heavy.name
        ryu.attackModifier.push(mod)
        damageBonus = modifiers.heavy.modifier
        
    }
    if (char == ken && mod == 3){
        mod = modifiers.ex.name
        ryu.attackModifier.push(mod)
        damageBonus = modifiers.ex.modifier
        
    }
    //ryu
    if (char == ryu && mod == 0){
        mod = modifiers.light.name
        ken.attackModifier.push(mod)
        
        
    }
    if (char == ryu && mod == 1){
        mod = modifiers.medium.name
        ken.attackModifier.push(mod)
        damageBonus = modifiers.medium.modifier
        
        
    }
    if (char == ryu && mod == 2){
        mod = modifiers.heavy.name
        ken.attackModifier.push(mod)
        damageBonus = modifiers.heavy.modifier
        
    }
    if (char == ryu && mod == 3){
        mod = modifiers.ex.name
        ken.attackModifier.push(mod)
        damageBonus = modifiers.ex.modifier
        
    }
}


//attacks functions
function punch(character){
    if (character == ken){
        ken.health = ken.health - (ryu.attacks.punch * damageBonus);
    }
    else{
        ryu.health = ryu.health - ken.attacks.punch;
    }
    update() 
}

function kick (character){
    if (character == ken)
    ken.health = ken.health - (ryu.attacks.kick * damageBonus);
    else {
        ryu.health = ryu.health - ken.attacks.kick;
    }
    update()
}

function hado (character){
    if (character == ken)
    ken.health = ken.health - (ryu.attacks.hadoken * damageBonus);
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
    healthUpdatePlayerOne.innerHTML = "KO";
   }
   if (ken.health <= 0){
    healthUpdatePlayerTwo.innerHTML = "KO";
   }
   
}

//initialize
update()


