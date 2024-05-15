let game = {
    inventory: {
        wood: {
            amount: 0
        },
        stone: {
            amount: 0
        },
        modify: (item, amount) => {
            game.inventory[item].amount += amount
            document.querySelector("#amount-" + item).innerHTML = game.inventory[item].amount
        }
    },
    tool: {
        current: 0
    }
}