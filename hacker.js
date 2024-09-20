function palindromMu(kelime) {
    const arrayValues = kelime.split(' ');
    const reverseArrayValues =arrayValues.reverse();
    
    if(arrayValues.toLowerCase() === reverseArrayValues.toLowerCase()) {
        return true;
    } else {return false};
}



 
// 

function maksMinFarki(sayilar) {
    const max = (Math.max(...sayilar);
    const min = (Math.min(...sayilar);
    return max - min;
}


nums = [2,7,11,15];

target = 9;

<html>
  <body id="body"> 
<input id="search-input" required></input>
<button id="search-button"></button>
<div id="pokemon-name"></div>
<div id="pokemon-id"></div>
<div id="weight"></div>
<div id="height"></div>
<div id="types"></div>
<div id="hp"></div>
<div id="attack"></div>
<div id="defense"></div>
<div id="special-attack"></div>
<div id="special-defense"></div>
<div id="speed"></div>
<script src="script.js"></script>
</body>
<hmtl>





let ayso=document.getElementById("search-button");
ayso.addEventListener("click",function(){
  let inputValue0=document.getElementById("search-input").value;
  if(inputValue0==="Red"){
    alert("Pokémon not found")
  }
});

document.getElementById("search-button").addEventListener("click",function(){
  let inputValue2=document.getElementById("search-input").value;
  if(inputValue2==="Pikachu"){
    document.getElementById("pokemon-name").textContent="PIKACHU";
     document.getElementById("pokemon-id").textContent="25";
      document.getElementById("weight").textContent="60";
       document.getElementById("height").textContent="4";    
    document.getElementById("hp").textContent="35";
     document.getElementById("attack").textContent="55";
      document.getElementById("defense").textContent="40";
       document.getElementById("special-attack").textContent="50";
        document.getElementById("special-defense").textContent="50";
          document.getElementById("speed").textContent="90";
  }
});

document.getElementById("search-button").addEventListener("click",function(){
  let inputValue3=document.getElementById("search-input").value;
  if(inputValue3==="Pikachu"){
    let img=document.createElement("img");
    img.setAttribute("id","sprite");
    img.setAttribute("src","front_default");
    document.getElementById("body").append(img);

  }
});

document.getElementById("search-button").addEventListener("click",function(){
  let inputValue5=document.getElementById("search-input").value;
  if(inputValue5==="Pikachu"){
    document.getElementById("pokemon-name").textContent="GENGAR";
     document.getElementById("pokemon-id").textContent="94";
      document.getElementById("weight").textContent="405";
       document.getElementById("height").textContent="15";    
    document.getElementById("hp").textContent="60";
     document.getElementById("attack").textContent="65";
      document.getElementById("defense").textContent="60";
       document.getElementById("special-attack").textContent="130";
        document.getElementById("special-defense").textContent="75";
          document.getElementById("speed").textContent="110";
  }
});

  const validPokemonNames = [
            'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
            'Squirtle', 'Wartortle', 'Blastoise', 'Pikachu', 'Raichu', 'Jigglypuff'
        ];
        document.getElementById('search-button').addEventListener('click', function() {
            const searchInput = document.getElementById('search-input').value.trim();
            if (!validPokemonNames.includes(searchInput)) {
                alert('Pokémon not found');
            } 
        });

        document.getElementById('search-button').addEventListener('click', function() {
    const pokemonId = document.getElementById('search-input').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemon-name').textContent = data.name;
            document.getElementById('pokemon-image').src = data.sprites.front_default;
            document.getElementById('pokemon-type').textContent = 'Type: ' + data.types.map(type => type.type.name).join(', ');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Invalid Pokémon ID. Please try again.');
        });
});