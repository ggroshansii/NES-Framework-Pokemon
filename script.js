
const pokemonz = document.querySelectorAll(".pokemon");

console.log(pokemonz);


for (let pokemon of pokemonz){
    pokemon.addEventListener("click", function(){
        if (pokemon.id == "bulbasaur" && pokemon.innerHTML = ""){
            console.log("bulbasaur")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<i class="nes-bulbasaur"></i>';
        } else if (pokemon.id == "charmander"){
            console.log("charmander")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<i class="nes-charmander"></i>';
        } else if (pokemon.id == "squirtle"){
            console.log("squrirtle")
            pokemon.innerHTML = "";
            pokemon.innerHTML = '<i class="nes-squirtle"></i>';
        }
        
    });
}