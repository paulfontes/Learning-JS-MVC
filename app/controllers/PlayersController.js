import { AppState } from "../AppState.js"
import { player } from "../models/player.js"
import { playersService } from "../services/PlayerService.js"

export class PlayersController {

    constructor(){
        console.log('🥷🏾🎮')
        AppState.players
        this.drawPlayers()
        // this.drawScore()
        // this.scorePoint()
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
        playersService.scorePoint(playerName)
        this.drawPlayers()
        

    }
    losePoint(playerName){
        console.log('clicked', playerName)
        playersService.losePoint(playerName)
        this.drawPlayers()


    }
    // drawScore(){
    //     console.log("Do I run?!")
    //     const playerScores = playersService.scorePoint()
    //     let playerScoreElm = document.getElementById('scores')
    // }
}