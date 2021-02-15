
const pokemonz = document.querySelectorAll(".pokemon");

console.log(pokemonz);


for (let pokemon of pokemonz){
    pokemon.addEventListener("click", function(){
        const bulb = document.querySelector("#bulbasaur");
        const char = document.querySelector("#charmander");
        const squirt = document.querySelector("#squirtle");

        if (pokemon.id == "bulbasaur" && pokemon.innerHTML == '<i class="nes-pokeball"></i>'){
            console.log("bulbasaur")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<a href= "https://pokemon.fandom.com/wiki/Bulbasaur"><i class="nes-bulbasaur"></i></a>';
            char.innerHTML = '<i class="nes-pokeball"></i>';
            squirt.innerHTML = '<i class="nes-pokeball"></i>';
       
       
    } else if (pokemon.id == "charmander" && pokemon.innerHTML == '<i class="nes-pokeball"></i>'){
            console.log("charmander")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<a href= "https://pokemon.fandom.com/wiki/Charmander"><i class="nes-charmander"></i></a>';
            bulb.innerHTML = '<i class="nes-pokeball"></i>'
            squirt.innerHTML = '<i class="nes-pokeball"></i>';
        } else if (pokemon.id == "squirtle" && pokemon.innerHTML == '<i class="nes-pokeball"></i>'){
            console.log("squrirtle")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<a href= "https://pokemon.fandom.com/wiki/Squirtle"><i class="nes-squirtle"></i></a>';
            char.innerHTML = '<i class="nes-pokeball"></i>';
            bulb.innerHTML = '<i class="nes-pokeball"></i>'
        }
        
    });
}