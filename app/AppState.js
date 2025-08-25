import { player } from './models/player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  
  players = [
    new player("Paul"),
    new player("Chase"),
    new player("Zandy")
  
  
  
  
  ];

  // players = [new player("Chase")];






}






export const AppState = createObservableProxy(new ObservableAppState())