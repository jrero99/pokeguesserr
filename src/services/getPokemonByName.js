import checkSecondType from './checkSecondType'
import checkGeneration from './checkGeneration'

export default function getPokemonByName(name) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + name;

  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const urlIMG =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        res.id +
        ".png";
      var pokemon = {
        id: res.id,
        name: res.name,
        img: urlIMG,
        type1: res.types[0].type.name,
        type2: checkSecondType(res.types),
        gen: checkGeneration(res.id),
        height: res.height,
        weight: res.weight,
      };
      return pokemon
    }).catch((error) => {
      return error
    });
    
}