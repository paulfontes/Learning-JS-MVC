import { ExampleController } from './controllers/ExampleController.js';
import { PlayersController } from './controllers/PlayersController.js';

class App {
  
  playerController = new PlayersController()

}

window['app'] = new App()


