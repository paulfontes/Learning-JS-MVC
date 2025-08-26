import { AppState } from "../AppState.js";

export class player{
    
    constructor(name) {
        this.name = name;
        this.score = 0
    }
    
    get PlayerTemplateCard(){
        return /*html*/`
        <div class="card">
        <div class="card-body">
        ${this.name} - ${this.score}
        </div>
        <button onclick="app.playerController.scorePoint('${this.name}')"> + </button>
        
        <button onclick="app.playerController.losePoint('${this.name}')"> - </button>
            
            </div>`
    }
}