import { AppState } from "../AppState.js";
import { FullPokemon, Pokemon } from "../models/Pokemon.js";



// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})


class WildPokemonService {

  async getWildPokemon() {
    const response = await pokeApi.get('pokemon?limit=151')
    // console.log(response.data);
    console.log(response.data.results);
    const wildPokemon = response.data.results.map(wildPokemonData => new Pokemon(wildPokemonData))
    AppState.wildPokemon = wildPokemon

  }
  async getActivePokemon(name) {
    // debugger
    const response = await pokeApi.get(`pokemon/${name}`)

    let pokemonTypes = []

    const activePokemon = new FullPokemon(response.data)

    AppState.activePokemon = activePokemon

    console.log('AppState.activePokemon test ', AppState.activePokemon);
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