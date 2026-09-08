
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Keyboard", price: 89, inStock: true },
  { id: 2, name: "Mouse", price: 29, inStock: false },
  { id: 3, name: "Monitor", price: 249, inStock: true },
  { id: 4, name: "Webcam", price: 59, inStock: true },
  { id: 5, name: "Headset", price: 99, inStock: false },
];

// 1. forEach — log every product as "Keyboard: $89"
// No return value expected — this is a pure side effect.
function logProducts(items: Product[]): void {
  items.forEach((item) => console.log(`${item.name}: $${item.price}`));
}
logProducts(products);

// 2. map — return just the names
function getNames(items: Product[]): string[] {
  const names = items.map((item) => item.name);
  return names;
}
console.log(getNames(products));

// 3. filter — return only products that are in stock
function getInStock(items: Product[]): Product[] {
  const inStock = items.filter((item) => item.inStock);
  return inStock;
}
console.log(getInStock(products));

// 4. filter + map chained — names of only in-stock products
function getInStockNames(items: Product[]): string[] {
  const inStockNames = items.filter((item) => item.inStock).map((item) => item.name);
  return inStockNames;
}
console.log(getInStockNames(products));

// 5. reduce — total price of ALL products
function getTotalPrice(items: Product[]): number {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  return totalPrice;
}
console.log(getTotalPrice(products));

// 6. reduce (stretch) — group into { inStock: Product[], outOfStock: Product[] }
function groupByStock(items: Product[]): { inStock: string[]; outOfStock: string[] } {
  const grouped = items.reduce<{ inStock: string[]; outOfStock: string[] }>((acc, item) => {
    if(item.inStock) {
      acc.inStock.push(item.name)
    } else {
      acc.outOfStock.push(item.name)
    }
    return acc
  }, { inStock: [], outOfStock: [] });
  return grouped;
}
console.log(groupByStock(products));
