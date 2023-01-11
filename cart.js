import { listIPv4 } from "./ipadresses.js";

const cart = {
    items: [],
    totalPrice: 0,
    get totalPrice() {
        return this.calculateItemPrice();
    },
    count: 0,
    add(productName, productPrice, quantity) {
        this.items.push({productName,productPrice,quantity});
        this.count += quantity;
    },
    increaseCount() {
        this.count++;
    },
    calculateItemPrice() {
        return this.items.reduce((acc,cur) => acc + cur.productPrice * cur.quantity, 0);
    },
    clear() {
        this.items.length = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${this.totalPrice}`);
    },
};

cart.add('Яблоко',15,25);
cart.add('Ананас',150,4);
cart.add('Мандарин',20,20);
cart.add('Арбуз',230,2);
cart.print();
console.log(`Использование гетера: ${cart.totalPrice}`);

// cart.totalPrice = 1000000000;
// console.log(`Переназначить значение 'totalPrice' нельзя: ${cart.totalPrice}`);

cart.clear();
cart.print();

const findArrayUniqueNumbers = (array) => {
    return Array.from(new Set(array)).length;
};

console.log(`Уникальных ip адресов в массиве: ${findArrayUniqueNumbers(listIPv4)}, всего значений: ${listIPv4.length}`);