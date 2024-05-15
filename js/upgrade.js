
export default class Upgrade{
    constructor(p, func){
        this._description = p.description || "No description"
        this._cost = p.cost
        this._upgradeFunction = func
    }
}