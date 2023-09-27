const food = require('./food.json')

console.log('list all the food items');
console.log(food)

console.log('list all the food items with category vegetables');
const vegetables = food.filter((item) => {
    return item.category === 'Vegetable'
});
console.log(vegetables);

console.log('list all the food items with category fruit');
const fruits = food.filter((item) => {
        return item.category === 'Fruit'
    });
console.log(fruits);

console.log('list all the food items with category protien');
const protien = food.filter((item) => {
            return item.category === 'Protein'
        });
    console.log(protien);

console.log('list all the food items with category nuts');
const nuts = food.filter((item) => {
            return item.category === 'Nuts'
        });
    console.log(nuts);

console.log('list all the food items with category grains');
const grains = food.filter((item) => {
            return item.category === 'Grain'
        });
    console.log(grains);

console.log('list all the food items with category dairy');
const dairy = food.filter((item) => {
            return item.category === 'Dairy'
        });
    console.log(dairy);

console.log('list all the food items with calorie above 100');
const calorie_above_100 = food.filter((item) => {
    return item.calorie > 100
});
console.log(calorie_above_100);


console.log('list all the food items with calorie below 100');
const calorie_below_100 = food.filter((item) => {
    return item.calorie < 100
});
console.log(calorie_below_100);

console.log('list all the food items with highest protien content to lowest');
const food_items_highest_protien = food.sort((a, b) => {
    return b.protiens - a.protiens
});
console.log(food_items_highest_protien);

console.log('list all the food items with lowest cab content to highest');
const food_items_sorted_protien = food.sort((a, b) => {
    return a.protiens - b.protiens
});
console.log(food_items_sorted_protien);