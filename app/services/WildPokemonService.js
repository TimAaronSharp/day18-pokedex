import { AppState } from "../AppState.js";
import { FullPokemon, Pokemon } from "../models/Pokemon.js";



// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})


class WildPokemonService {

  async getWildPokemon() {
    const response = await pokeApi.get('pokemon')
    // console.log(response.data);
    console.log(response.data.results);
    const wildPokemon = response.data.results.map(wildPokemonData => new Pokemon(wildPokemonData))
    AppState.wildPokemon = wildPokemon

    // console.log(AppState.wildPokemon);

  }
  async getActivePokemon(name) {
    // debugger
    const response = await pokeApi.get(`pokemon/${name}`)
    // console.log("The active pokemon is ", response.data);

    let pokemonTypes = []
    // console.log(`response.data.types is ${response.data.types[0].type.name}`);

    // response.data.types.forEach(pokemonType => pokemonTypes.push(pokemonType.type.name))
    const activePokemon = new FullPokemon(response.data)
    // activePokemon.types = pokemonTypes
    // console.log(pokemonTypes);

    AppState.activePokemon = activePokemon

    console.log('AppState.activePokemon test ', AppState.activePokemon);


    // console.log(`activePokemon in AppState is ${AppState.activePokemon.name}`);
    // console.log(`weight in AppState is ${AppState.activePokemon.weight}`);
    // console.log(`height in AppState is ${AppState.activePokemon.height}`);
    // console.log(`attack in AppState is ${AppState.activePokemon.attack}`);
    // console.log(`defense in AppState is ${AppState.activePokemon.defense}`);
    // console.log(`speed in AppState is ${AppState.activePokemon.speed}`);
    // console.log(`types in AppState is ${AppState.activePokemon.types}`);



  }

}

export const wildPokemonService = new WildPokemonService()


// this.nickName = data.nickName
//     this.img = data.img
//     this.backImg = data.backImg
//     this.weight = data.weight
//     this.height = data.height
//     this.health = data.stats[0].base_stat
//     this.attack = data.stats[1].base_stat
//     this.defense = data.stats[2].base_stat
//     this.speed = data.stats[5].base_stat
//     this.types = data.types
//     this.creatorId = data.creatorId
//     this.creator = data.creator
//     this.id = data.id