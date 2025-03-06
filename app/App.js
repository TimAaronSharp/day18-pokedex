import { AuthController } from './controllers/AuthController.js';
import { SandboxPokemonController } from './controllers/SandboxPokemonController.js';
import { WildPokemoncontroller } from './controllers/WildPokemonController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  wildPokemonController = new WildPokemoncontroller()
  sandboxPokemonController = new SandboxPokemonController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
