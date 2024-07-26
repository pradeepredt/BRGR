// Arrays for burgers and ingredients
const vegBurgers = [
    { name: 'Veggie Delight', price: 125 },
    { name: 'Paneer Burger', price: 150 },
    { name: 'Spicy Veg Burger', price: 160 },
    { name: 'Cheese Veg Burger', price: 180 },
    { name: 'Aloo Tikki Burger', price: 200 }
];

const nonVegBurgers = [
    { name: 'Chicken Burger', price: 220 },
    { name: 'Beef Burger', price: 400 },
    { name: 'Fish Burger', price: 250 },
    { name: 'Bacon Burger', price: 450 },
    { name: 'Egg Burger', price: 200 }
];

const ingredients = [
    { name: 'Lettuce', price: 30 },
    { name: 'Tomato', price: 20 },
    { name: 'Cheese', price: 40 },
    { name: 'Onions', price: 15 },
    { name: 'Pickles', price: 20 }
];

// Array to hold the user's custom burger
let customBurger = [];

// DOM elements
const vegBurgerList = document.getElementById('veg-burger-list');
const nonVegBurgerList = document.getElementById('non-veg-burger-list');
const ingredientList = document.getElementById('ingredient-list');
const burgerDisplay = document.getElementById('burger-display');
const costDisplay = document.getElementById('cost-display');
const resetBtn = document.getElementById('reset-btn');

// Display available burgers
function displayBurgers() {
    vegBurgerList.innerHTML = vegBurgers.map(burger => `
        <li class="burger-item">
            <span>${burger.name} - Rs.${burger.price.toFixed(2)}</span>
            <button onclick="addBurger('${burger.name}', 'veg')">Add</button>
        </li>
    `).join('');

    nonVegBurgerList.innerHTML = nonVegBurgers.map(burger => `
        <li class="burger-item">
            <span>${burger.name} - Rs.${burger.price.toFixed(2)}</span>
            <button onclick="addBurger('${burger.name}', 'non-veg')">Add</button>
        </li>
    `).join('');
}


// Display available ingredients
function displayIngredients() {
    ingredientList.innerHTML = ingredients.map(ingredient => `
        <div>
            <span>${ingredient.name}</span>
            <button onclick="addIngredient('${ingredient.name}')">Add</button>
        </div>
    `).join('');
}

// Add burger to the custom burger
function addBurger(name, type) {
    const burger = (type === 'veg' ? vegBurgers : nonVegBurgers).find(b => b.name === name);
    if (burger) {
        customBurger.push(burger);
        updateBurgerDisplay();
        updateCostDisplay();
    }
}

// Add ingredient to the custom burger
function addIngredient(name) {
    const ingredient = ingredients.find(ing => ing.name === name);
    if (ingredient) {
        customBurger.push(ingredient);
        updateBurgerDisplay();
        updateCostDisplay();
    }
}

// Update burger display
function updateBurgerDisplay() {
    burgerDisplay.innerHTML = customBurger.map(item => `
        <div>${item.name}</div>
    `).join('');
}

// Calculate and update the total cost
function updateCostDisplay() {
    const totalCost = customBurger.reduce((acc, item) => acc + item.price, 0);
    costDisplay.textContent = `Rs.${totalCost.toFixed(2)}`;
}

// Reset the custom burger
function resetBurger() {
    customBurger = [];
    updateBurgerDisplay();
    updateCostDisplay();
}

// Event listeners
resetBtn.addEventListener('click', resetBurger);

// Initial display
displayBurgers();
displayIngredients();
