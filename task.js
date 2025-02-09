const input = require('sync-input');

const shop = {
    item: ["Bubblegum","Toffee","Ice cream","Milk chocolate","Doughnut","Pancake"],
    cost: [2,0.2,5,4,2.5,3.2],
    earned: [202,118,2250,1680,1075,80]
};

showEarnedAmount(shop);

function showEarnedAmount (Object){
    console.log("Earned amount:");
    for (let i=0; i < shop.item.length ;i++) {
        console.log(`${shop.item[i]}: $${shop.earned[i]}`);
    }
    console.log();
}

let income = calculateIncome(shop);

function calculateIncome(Object) {
    let sum= 0;
    shop.earned.forEach(amount => {
        sum += amount;
    });
    return sum;
}

console.log(`Income: $${income}`);

let staffExpenses = Number(input("Staff expenses: "));
let otherExpenses = Number(input("Other expenses: "));
let totalExpenses = staffExpenses + otherExpenses;

console.log(`Net income: $${income - totalExpenses}`);