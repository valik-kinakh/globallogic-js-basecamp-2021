function tesla_stock(action) {
    const ACTIONS = {
        buy: "You've bought Tesla stock",
        sell: "You've sold Tesla stock"
    }

    return ACTIONS[action];
}

module.exports = tesla_stock;