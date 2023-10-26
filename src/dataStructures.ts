type Order = {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
};

type OrderBook = Order[];

function placeOrder(order: Order, orderBook: OrderBook): OrderBook {
  return [...orderBook, order];
}

function cancelOrder(order: Order, orderBook: OrderBook): OrderBook {
  return orderBook.filter(o => o.id !== order.id);
}

function matchOrders(orderBook: OrderBook): OrderBook {
  // This is a simple implementation. In a real-world application, you would need a more complex algorithm to match orders.
  const buyOrders = orderBook.filter(o => o.type === 'BUY').sort((a, b) => b.price - a.price);
  const sellOrders = orderBook.filter(o => o.type === 'SELL').sort((a, b) => a.price - b.price);
  const matchedOrders = [];

  while (buyOrders.length > 0 && sellOrders.length > 0) {
    const buyOrder = buyOrders[0];
    const sellOrder = sellOrders[0];

    if (buyOrder.price >= sellOrder.price) {
      const quantity = Math.min(buyOrder.quantity, sellOrder.quantity);
      matchedOrders.push({ ...buyOrder, quantity }, { ...sellOrder, quantity });

      if (buyOrder.quantity > sellOrder.quantity) {
        buyOrder.quantity -= sellOrder.quantity;
        sellOrders.shift();
      } else if (buyOrder.quantity < sellOrder.quantity) {
        sellOrder.quantity -= buyOrder.quantity;
        buyOrders.shift();
      } else {
        buyOrders.shift();
        sellOrders.shift();
      }
    } else {
      break;
    }
  }

  return matchedOrders;
}
