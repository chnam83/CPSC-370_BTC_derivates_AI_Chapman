// Data Structures for CLOB

type Order = {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
};

type OrderBook = Order[];

// Data Structures for AMM

type Reserve = {
  tokenX: number;
  tokenY: number;
};

type Liquidity = {
  proportion: number;
};

function addLiquidity(liquidity: Liquidity, reserve: Reserve): Reserve {
  const newReserve = { ...reserve };
  newReserve.tokenX += liquidity.proportion * reserve.tokenX;
  newReserve.tokenY += liquidity.proportion * reserve.tokenY;
  return newReserve;
}

function removeLiquidity(liquidity: Liquidity, reserve: Reserve): Reserve {
  const newReserve = { ...reserve };
  newReserve.tokenX -= liquidity.proportion * reserve.tokenX;
  newReserve.tokenY -= liquidity.proportion * reserve.tokenY;
  return newReserve;
}

function swap(reserve1: Reserve, reserve2: Reserve): { newReserve1: Reserve, newReserve2: Reserve } {
  const newReserve1 = { ...reserve1 };
  const newReserve2 = { ...reserve2 };
  const temp = newReserve1.tokenX;
  newReserve1.tokenX = newReserve2.tokenX;
  newReserve2.tokenX = temp;
  return { newReserve1, newReserve2 };
}
