import Upgrade from "./upgrade.js";

export default class Resources{
    _list = {}
    constructor(p){

        // 0 sticks
        this.addResource( new Harvestable(
            {
                id: "stick",
                icon: "🌲",
                name: "Stick",
                toughness: 1,
                miningLevel: 1,
                sellValue: 0,
                upgrades: [
                    new HarvestUpgrade(
                        {
                            description: "Sell this item for $0.20",
                            cost: 10,
                        },
                        () => {
                            this._sellValue = .2
                        }
                    ),
                    new HarvestUpgrade(
                        {
                            description: "Increase sell value by 1",
                            cost: 200,
                        },
                        () => {
                            this._sellValue += 1
                        }
                    ),
                ]
            }
        ));

        // 1 wood
        this.addResource( new Harvestable(
            {
                id: "wood",
                icon: "🪵",
                name: "Wood",
                toughness: 8,
                miningLevel: 2,
                sellValue: 1,
                upgrades: [
                    new HarvestUpgrade(
                        {
                            description: "Reduce toughness by 1",
                            cost: 10,
                        },
                        () => {
                            this._toughness -= 1
                        }
                    ),
                    new HarvestUpgrade(
                        {
                            description: "Increase sell value by 1",
                            cost: 20,
                        },
                        () => {
                            this._sellValue += 1
                        }
                    ),
                ]
            }
        ));

        // 2 stone
        this.addResource( new Harvestable(
            {
                id: "stone",
                icon: "🪨",
                name: "Stone",
                toughness: 16,
                miningLevel: 3,
                sellValue: 3,
                upgrades: [
                    new HarvestUpgrade(
                        {
                            description: "Reduce toughness by 6",
                            cost: 30,
                        },
                        () => {
                            this._toughness -= 6
                        }
                    ),
                    new HarvestUpgrade(
                        {
                            description: "Increase sell value by 2",
                            cost: 60,
                        },
                        () => {
                            this._sellValue += 2
                        }
                    ),
                ]
            }
        ));

    }

    addResource(res){
        this._list[res.id] = res
    }
}

class GameResource{
    constructor(p){
        this._id = p.id 
        this._name = p.name
        this._icon = p.icon
        this._toughness = p.toughness       // determines the time it needs to be created
        this._miningLevel = p.miningLevel   // determines the necessary tool
        this._sellValue = p.sellValue       // initial sell value
        
        this._upgrades = p.upgrades
    }
    upgrade(){
        //perform cash checks and upgrade
        this.updateValues()
    }
    updateValues(){
        //draw shit to html
    }
}


class HarvestUpgrade extends Upgrade{
    constructor(p, func){
        super(p, func)
    }
}

class Craftable extends GameResource{
    constructor(p){
        super(p)
    }
}
class Harvestable extends GameResource{
    constructor(p){
        super(p)
    }
}