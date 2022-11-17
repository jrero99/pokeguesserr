import { useState, useEffect } from "react";
import Type from "./components/Type";
import End from "./components/End";
import PokeballRow from "./components/PokeballRow";
import getPokemon from "./services/getPokemon.js";
import getPokemonByName from "./services/getPokemonByName.js";
import "./App.css";
function App() {
  const randomID = Math.floor(Math.random() * 905);
  const [pokemon, setPokemon] = useState({});
  const [end, setEnd] = useState({});
  const [searchedPokemon, setSearchedPokemon] = useState({});
  const [description, setDescription] = useState("");
  const [types, setTypes] = useState([
    { name: "normal", status: null },
    { name: "fire", status: null },
    { name: "water", status: null },
    { name: "grass", status: null },
    { name: "electric", status: null },
    { name: "ice", status: null },
    { name: "fighting", status: null },
    { name: "poison", status: null },
    { name: "ground", status: null },
    { name: "flying", status: null },
    { name: "psychic", status: null },
    { name: "bug", status: null },
    { name: "rock", status: null },
    { name: "ghost", status: null },
    { name: "dark", status: null },
    { name: "dragon", status: null },
    { name: "steel", status: null },
    { name: "fairy", status: null },
    { name: "single type", status: null },
  ]);
  
  const [turns, setTurns] = useState([]);
  const handleOnChange = (e) => {
    setDescription(e.target.value.trim().replace(" ", "-"));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    getPokemonByName(description.toLowerCase()).then((poke) =>
      setSearchedPokemon(poke)
      
    );
  };

  useEffect(() => {
    getPokemon(randomID).then((poke) => setPokemon(poke));
  }, []);

  useEffect(() => {
    var result = {
      id: turns.length,
      gen: null,
      type1: null,
      type2: null,
      height: null,
      weight: null,
      searchedGen: null,
      searchedName: null,
      searchedType1: null,
      searchedType2: null,
      searchedWeight: null,
      searchedHeight: null,
    };
    if (searchedPokemon.name != pokemon.name && turns.length > 0) {
      if (turns.length == 7) {
        setEnd({ finish: true, status: "defeat" });
      } else {
        if (searchedPokemon.gen == pokemon.gen) {
          result.gen = "correct";
        } else if (searchedPokemon.gen < pokemon.gen) {
          result.gen = "up";
        } else {
          result.gen = "down";
        }
        if (searchedPokemon.height == pokemon.height) {
          result.height = "correct";
        } else if (searchedPokemon.height < pokemon.height) {
          result.height = "up";
        } else {
          result.height = "down";
        }
        if (searchedPokemon.weight == pokemon.weight) {
          result.weight = "correct";
        } else if (searchedPokemon.weight < pokemon.weight) {
          result.weight = "up";
        } else {
          result.weight = "down";
        }

        if (
          searchedPokemon.type1 != pokemon.type1 &&
          searchedPokemon.type1 != pokemon.type2
        ) {
          result.type1 = "wrong";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type1
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "wrong";
            setTypes(clonTypes);
          }
        } else if (
          searchedPokemon.type1 != pokemon.type1 &&
          searchedPokemon.type1 == pokemon.type2
        ) {
          result.type1 = "wrongpos";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type1
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "correct";
            setTypes(clonTypes);
          }
        } else {
          result.type1 = "correct";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type1
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "correct";
            setTypes(clonTypes);
          }
        }

        if (
          searchedPokemon.type2 != pokemon.type2 &&
          searchedPokemon.type2 != pokemon.type1 &&
          searchedPokemon.type2 != null
        ) {
          result.type2 = "wrong";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type2
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "wrong";
            setTypes(clonTypes);
          }
        } else if (
          searchedPokemon.type2 != pokemon.type2 &&
          searchedPokemon.type2 == pokemon.type1
        ) {
          result.type2 = "wrongpos";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type2
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "correct";
            setTypes(clonTypes);
          }
        } else if (searchedPokemon.type2 == null && pokemon.type2 == null) {
          result.type2 = "correct";
          const index = types.findIndex((type) => type.name == "single type");
          if (turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "correct";
            setTypes(clonTypes);
          }
        } else if (searchedPokemon.type2 == null && pokemon.type2 !== null) {
          result.type2 = "wrong";
          const index = types.findIndex((type) => type.name == "single type");
          if (turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "wrong";
            setTypes(clonTypes);
          }
        } else {
          result.type2 = "correct";
          const index = types.findIndex(
            (type) => type.name == searchedPokemon.type2
          );
          if (index != -1 && turns.length > 0) {
            const clonTypes = [...types];
            clonTypes[index].status = "correct";
            setTypes(clonTypes);
          }
        }
      }
    } else if (searchedPokemon.name == pokemon.name && turns.length > 0) {
      setEnd({ finish: true, status: "victory" });
    }

    result.searchedGen = searchedPokemon.gen;
    result.searchedHeight = searchedPokemon.height;
    result.searchedName = searchedPokemon.name;
    result.searchedWeight = searchedPokemon.weight;
    result.searchedType1 = searchedPokemon.type1;
    result.searchedType2 = searchedPokemon.type2;

    
    setTurns([...turns, result]);
    
  }, [searchedPokemon]);
  return (
   <div className="grid h-screen place-items-center">
    
      {end.finish ? (
        <End poke={pokemon} result={end} />
      ) : (
        <div>
          <div className="grid grid-cols-6 gap-1 content-center">
            <p className="mx-auto text-white">Gen</p>
            <p className="mx-auto text-white">Type 1</p>
            <p className="mx-auto text-white">Type 2</p>
            <p className="mx-auto text-white">Height</p>
            <p className="mx-auto text-white">Weight</p>
            <p className="mx-auto text-white">Pokémon</p>
          </div>
          {turns.slice(1).map((turn) => (
            <PokeballRow key={turn.id} results={turn} />
          ))}
          <form onSubmit={handleOnSubmit} className="text-center mt-10 mb-10 font-bold ">
            <input
              placeholder="What is that pokémon?"
              onChange={handleOnChange}
            />
            <button className = "bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-l ml-1">Try</button>
          </form>
          <Type types={types} />
        </div>
      )}
    </div>
  );
}

export default App;
