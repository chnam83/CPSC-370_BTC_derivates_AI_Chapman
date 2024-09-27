// Order book
let orderBook = [];

// Function to handle orders
function handleOrder(order) {
    orderBook.push(order);
}

// Function to match orders
function matchOrders() {
    // Simple matching: find orders with the same price
    let buyOrders = orderBook.filter(order => order.type === 'buy');
    let sellOrders = orderBook.filter(order => order.type === 'sell');
    let matchedOrders = [];

    for (let buyOrder of buyOrders) {
        for (let sellOrder of sellOrders) {
            if (buyOrder.price === sellOrder.price) {
                matchedOrders.push({buyOrder, sellOrder});
            }
        }
    }

    return matchedOrders;
}

// Function to execute trades
function executeTrades(matchedOrders) {
    for (let matchedOrder of matchedOrders) {
        // Remove orders from order book
        orderBook = orderBook.filter(order => order !== matchedOrder.buyOrder && order !== matchedOrder.sellOrder);

        // Log trade
        console.log(`Trade executed: ${matchedOrder.buyOrder.amount} at ${matchedOrder.buyOrder.price}`);
    }
}

// Function to emulate DEX
function emulateDex(orders) {
    for (let order of orders) {
        handleOrder(order);
    }

    let matchedOrders = matchOrders();
    executeTrades(matchedOrders);
}
