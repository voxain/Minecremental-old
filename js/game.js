import Resources from "./resources.js";
import Tools from "./tools.js";
import Actions from "./actions.js";
class Game{
    static _GameState = {
        currentTool: 0
    };
    static Inventory;
    static Resources = new Resources();
    static Tools = new Tools();
    static Actions = Actions;
    upgradeTool(){

    }
    getCurrentTool(i){
        return Tools.list[i || _GameState.currentTool]
    }
    init(){
        $("#backdrop-wood").on("click", () => {
            console.log("action")
        })
    }
}

new Game().init()