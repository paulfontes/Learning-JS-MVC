import { AppState } from "../AppState.js"
import { player } from "../models/player.js"

export class PlayersController {

    constructor(){
        console.log('🥷🏾🎮')
        AppState.players
        this.drawPlayers()
        this.scorePoint()
    }
    drawPlayers(){
        console.log('Do I run')
        const players = AppState.players
        let playerContent = ''
        players.forEach(player => playerContent += player.PlayerTemplateCard)
        let playersElement = document.getElementById('players')
        playersElement.innerHTML = `${playerContent}`
    }
    scorePoint(playerName){
        
        console.log('clicked', playerName)


    }
}