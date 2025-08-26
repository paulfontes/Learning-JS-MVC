import { AppState } from "../AppState.js"

class PlayersService {
    scorePoint(playerName){
        console.log('service score', playerName)
        const playerToScore = AppState.players.find((player) => player.name == playerName)
        playerToScore.score++
        console.log(playerToScore)
    }
    losePoint(playerName){
        console.log('service score', playerName)
        const playerToScore = AppState.players.find((player) => player.name == playerName)
        playerToScore.score--
        if(playerToScore.score <= 0 ) {
            playerToScore.score = 0
        }
        console.log(playerToScore)
    }


}



export const playersService = new PlayersService()