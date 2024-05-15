game.tools = [
    {
        name: "Hand",
        cost: [
            ["wood", 1]
        ],
        description: "Looks like it hurts.",
        mining_level: 0,
        id: "hand"
    },
    {
        name: "Primitive Pick",
        cost: [
            ["stone", 100]
        ],
        description: "Klonky boi",
        mining_level: 1,
        id: "pick_wood"
    },
]

function tool_upgrade(){
    let validate = true
    game.tools[game.tool.current].cost.forEach(i => {
        if(game.inventory[i[0]].amount < i[1]) {
            alert("Not enough " + i[0])
            validate = false
        } 
    });
    if(validate){
        game.tools[game.tool.current].cost.forEach(i => {
            game.inventory.modify(i[0], -i[1])
        });
        game.tool.current++
        let newtool = get_current_tool()
    
        $("#tool-image").attr("src", "/img/tools/" + newtool.id + ".png")
        $("#tool-name").html(newtool.name)
        $("#tool-description").html(newtool.description)
        $("#tool-upgradebutton").html("Upgrade Cost " + newtool.cost.map(i => i[0] + ":" + i[1]))
        $("#tool-level").html("Mining Level: " + newtool.mining_level)
    }
}

function get_current_tool(){
    return game.tools[game.tool.current]
}