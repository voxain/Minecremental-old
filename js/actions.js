import game from "./game"

export default class Actions{
    static HarvestResource(id){
        console.log(game.Resources.get(id))
        game.Resources.get(id).debug()
    }
}