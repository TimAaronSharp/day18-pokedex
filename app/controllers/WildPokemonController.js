import { AppState } from "../AppState.js";
import { wildPokemonService } from "../services/WildPokemonService.js";
import { Pop } from "../utils/Pop.js";



export class WildPokemoncontroller {
  constructor() {
    console.log('wildPokemonController is ready');
    AppState.on('wildPokemon', this.drawWildPokemon)
    AppState.on('activePokemon', this.drawActivePokemon)
    this.getWildPokemon()
  }

  async getWildPokemon() {
    try {
      await wildPokemonService.getWildPokemon()
    } catch (error) {
      Pop.toast("Could not get Pokemon", 'error')
      console.error(error)
    }
  }

  async getActivePokemon(name) {
    try {
      await wildPokemonService.getActivePokemon(name)
    } catch (error) {
      Pop.toast("Could not get Pokemon", 'error')
      console.error(error)
    }
  }
  drawWildPokemon() {
    console.log('is draw working?');

    const wildPokemon = AppState.wildPokemon
    let listContent = ''

    wildPokemon.forEach(pokemon => listContent += pokemon.listHTMLTemplate)
    const wildPokemonElem = document.getElementById('wild-pokemon-list')

    wildPokemonElem.innerHTML = listContent

  }
  drawActivePokemon() {
    const activePokemon = AppState.activePokemon
    let activeContent = activePokemon.name
    const activePokemonElem = document.getElementById('active-pokemon')

    activePokemonElem.innerHTML = activeContent

  }
}