import Upgrade from "./upgrade.js"

export default class Tools{
    _list = {}
    constructor(){

        // 0 hand
        this.addTool( new Tool(
            {
                id: "hand",
                name: "Hand",
                icon: "👊",
                description: "This looks like it hurts.",
                cost: 0,
                miningLevel: 1,
                miningPower: 0
            }
        ))
        
        // 2 axe_wood
        this.addTool( new Tool(
            {
                id: "axe_wood",
                name: "Makeshift Axe",
                icon: "🪓",
                description: "Looks like it could fall apart at any moment.",
                cost: 10,
                miningLevel: 2,
                miningPower: 8 // mininglevel 2 only applies too wood anyways. Might aswell make the axe break wood faster
            }
        ))
        
        // 2 pick_wood
        this.addTool( new Tool(
            {
                id: "pick_wood",
                name: "Wooden Pick",
                icon: "",
                description: "It's a bit wonky, but it will turn a boulder into pieces.",
                cost: 50,
                miningLevel: 3,
                miningPower: 4
            }
        ))

    }
    addTool(res) {
        this._list[res.id] = res
    }
}

class Tool{
    constructor(p){
        this._id = p.id
        this._name = p.name
        this._icon = p.icon
        this._description = p.description
        this._cost = p.cost
        this._miningLevel = p.miningLevel
        this._miningPower = p.miningPower

        //this._upgrades = p.upgrades
    }
}

class ToolUpgrade extends Upgrade{
    constructor(p){
        super(p)
    }
}