import { AppState } from "../AppState.js"
import { FullPokemon, Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js"



class SandboxPokemonServices {


  async getMyPokemon() {
    const response = await api.get('api/pokemon')
    // console.log(response.data);
    // console.log(`response from my sandbox pokemon is ${response}`);
    const myPokemon = response.data.map(myPokemonData => new Pokemon(myPokemonData))
    AppState.myPokemon = myPokemon

    // console.log(`AppState.myPokemon is ${AppState.myPokemon}`);

  }

  async makeMyPokemonActive(pokemonId) {
    const response = await api.get()
  }

  async catchPokemon() {
    const pokemonToCatch = AppState.activePokemon
    const response = await api.post('api/pokemon', pokemonToCatch)

    const caughtPokemon = new FullPokemon(response.data)
    AppState.myPokemon.push(caughtPokemon)

  }

}

export const sandboxPokemonService = new SandboxPokemonServices()