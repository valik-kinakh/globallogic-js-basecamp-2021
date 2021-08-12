function apple_stock(action) {
    const ACTIONS = {
        buy: "You've bought apple stock",
        sell: "You've sold apple stock"
    }

    return ACTIONS[action];
}

module.exports = apple_stock;