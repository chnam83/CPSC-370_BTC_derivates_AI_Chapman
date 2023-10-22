type Order = {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
};

type OrderBook = Order[];
