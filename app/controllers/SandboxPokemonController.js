import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";



export class SandboxPokemonController {
  constructor() {
    console.log('sandboxPokemonController is ready');
    AppState.on('myPokemon', this.drawMyPokemon)
    // this.getMyPokemon()
  }

  drawMyPokemon() {
    // console.log('is draw working?');

    const myPokemon = AppState.myPokemon
    let listContent = ''

    myPokemon.forEach(pokemon => listContent += pokemon.listHTMLTemplate)
    const myPokemonElem = document.getElementById('my-pokemon-list')

    myPokemonElem.innerHTML = listContent

  }

  async getMyPokemon() {
    try {
      await sandboxPokemonService.getMyPokemon()
    } catch (error) {
      Pop.toast("Could not get Pokemon", 'error')
      console.error(error)
    }
  }

  myPokemonBtn() {
    this.getMyPokemon()
  }

  async makeMyPokemonActive(pokemonId) {
    try {
      await sandboxPokemonService.makeMyPokemonActive(pokemonId)
    } catch (error) {
      Pop.toast("Could not get Pokemon", 'error')
      console.error(error)
    }
  }

  async catchPokemon() {
    try {

      sandboxPokemonService.catchPokemon()
    } catch (error) {
      Pop.toast("Could not catch Pokemon", 'error')
      console.error(error)
    }
  }
}

// drawmyPokemon() {
//   console.log('is draw working?');

//   const myPokemon = AppState.myPokemon
//   let listContent = ''

//   myPokemon.forEach(pokemon => listContent += pokemon.listHTMLTemplate)
//   const myPokemonElem = document.getElementById('wild-pokemon-list')

//   myPokemonElem.innerHTML = listContent

// }