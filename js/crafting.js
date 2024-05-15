const bggrad = "linear-gradient(to right, #51515e 0%, #51515e ##PERCENTAGE##%, transparent calc(##PERCENTAGE##% + 1px), transparent 100%)"

function craft(item){
    let craftable = game.craftables[item]
    // check for tool mining level
    // only tool with required mining level can harvest material 
    // subsequent mining levels will be divided from click count
    craftable.clicked++
    if(craftable.clicked >= craftable.clicks) {
        craftable.clicked = 0
        game.inventory.modify(item, 1)
    }

    document.querySelector("#backdrop-" + item).style.background = 
        bggrad.replace(/##PERCENTAGE##/g, craftable.clicked / (craftable.clicks - 1) * 100)
}