import { FullPokemon, Pokemon } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  identity = null
  /**
   * @type {Pokemon[]}
   */
  wildPokemon = []

  /**
   * @type {FullPokemon[]}
   */
  myPokemon = []

  activePokemon = null

}

export const AppState = createObservableProxy(new ObservableAppState())