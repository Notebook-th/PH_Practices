// Global variables
let cartItems = [];
let totalPrice = 0;
let allPlants = []; // This would be populated with your plant data

// DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Add event listeners
    document.getElementById('all-trees').addEventListener('click', function() {
        showAllPlants();
    });
    
    // Add to cart buttons event delegation
    document.getElementById('card-section').addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const plantName = e.target.getAttribute('data-name');
            const plantPrice = parseInt(e.target.getAttribute('data-price'));
            addtoCart(plantName, plantPrice);
        }
    });
    
    // Plant name click for details (event delegation)
    document.getElementById('card-section').addEventListener('click', function(e) {
        if (e.target.tagName === 'H2' && e.target.hasAttribute('data-id')) {
            const plantId = parseInt(e.target.getAttribute('data-id'));
            PlantsDetails(plantId);
        }
    });
});

// Initialize the application
function initApp() {
    // This would typically fetch data from an API
    // For now, we'll use the data from the HTML structure
    
    // Extract plant data from the existing HTML
    const plantCards = document.querySelectorAll('#card-section > div');
    allPlants = Array.from(plantCards).map((card, index) => {
        return {
            id: index + 1,
            name: card.querySelector('h2').textContent,
            price: parseInt(card.querySelector('span').textContent.replace('৳', '')),
            category: card.querySelector('button').textContent,
            description: card.querySelector('p').textContent,
            image: card.querySelector('img').src
        };
    });
    
    // Update all plant elements with data attributes
    plantCards.forEach((card, index) => {
        const plantId = index + 1;
        card.querySelector('h2').setAttribute('data-id', plantId);
        const addButton = card.querySelector('button:last-child');
        addButton.classList.add('add-to-cart');
        addButton.setAttribute('data-name', allPlants[index].name);
        addButton.setAttribute('data-price', allPlants[index].price);
    });
    
    // Initialize cart display
    updateCartDisplay();
}

// Category filtering function
function btnCategories(categoryId) {
    // Show loading animation
    document.getElementById('loading-dots').classList.remove('hidden');
    document.getElementById('card-section').classList.add('hidden');
    
    // Reset all category buttons
    const categoryButtons = document.querySelectorAll('#categories-btn button');
    categoryButtons.forEach(button => {
        button.classList.remove('bg-[#15803D]', 'text-white');
        button.classList.add('text-black');
    });
    
    // Highlight selected category
    document.getElementById(`trees-category-${categoryId}`).classList.add('bg-[#15803D]', 'text-white');
    document.getElementById(`trees-category-${categoryId}`).classList.remove('text-black');
    
    // Simulate API call delay
    setTimeout(() => {
        // Get category name from button text
        const categoryName = document.getElementById(`trees-category-${categoryId}`).textContent;
        
        // Filter plants by category
        const filteredPlants = allPlants.filter(plant => plant.category === categoryName);
        
        // Display filtered plants
        displayPlants(filteredPlants);
        
        // Hide loading animation
        document.getElementById('loading-dots').classList.add('hidden');
        document.getElementById('card-section').classList.remove('hidden');
    }, 500);
}

// Show all plants
function showAllPlants() {
    // Show loading animation
    document.getElementById('loading-dots').classList.remove('hidden');
    document.getElementById('card-section').classList.add('hidden');
    
    // Reset all category buttons
    const categoryButtons = document.querySelectorAll('#categories-btn button');
    categoryButtons.forEach(button => {
        button.classList.remove('bg-[#15803D]', 'text-white');
        button.classList.add('text-black');
    });
    
    // Highlight "All Trees" button
    document.getElementById('all-trees').classList.add('bg-[#15803D]', 'text-white');
    
    // Simulate API call delay
    setTimeout(() => {
        // Display all plants
        displayPlants(allPlants);
        
        // Hide loading animation
        document.getElementById('loading-dots').classList.add('hidden');
        document.getElementById('card-section').classList.remove('hidden');
    }, 500);
}

// Display plants in the card section
function displayPlants(plants) {
    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML = '';
    
    if (plants.length === 0) {
        cardSection.innerHTML = `
            <div class="col-span-3 text-center py-10">
                <p class="text-xl">No plants found in this category.</p>
            </div>
        `;
        return;
    }
    
    plants.forEach(plant => {
        const plantCard = `
            <div class="bg-white p-4 rounded-lg space-y-4 w-full mx-auto shadow-lg flex flex-col justify-between">
                <div class="h-[232px] overflow-hidden rounded-lg">
                    <img class="rounded-lg w-full h-full object-cover" src="${plant.image}" alt="${plant.name}">
                </div>
                <div class="space-y-2">
                    <h2 data-id="${plant.id}" class="cursor-pointer font-semibold text-sm">${plant.name}</h2>
                    <p class="text-xs">${plant.description}</p>
                    <div class="flex justify-between">
                        <button class="cursor-pointer py-1 px-3 font-medium text-sm rounded-3xl bg-[#DCFCE7] text-[#15803D]">${plant.category}</button>
                        <span class="font-semibold text-sm">৳${plant.price}</span>
                    </div>
                </div>
                <button data-name="${plant.name}" data-price="${plant.price}" class="add-to-cart cursor-pointer font-normal w-full py-3 rounded-3xl bg-[#15803D] text-white">Add to Cart</button>
            </div>
        `;
        cardSection.innerHTML += plantCard;
    });
}

// Plant details modal
function PlantsDetails(plantId) {
    const plant = allPlants.find(p => p.id === plantId);
    
    if (!plant) {
        alert('Plant details not found!');
        return;
    }
    
    const modalContent = `
        <div class="space-y-4">
            <div class="h-64 overflow-hidden rounded-lg">
                <img class="rounded-lg w-full h-full object-cover" src="${plant.image}" alt="${plant.name}">
            </div>
            <h2 class="text-2xl font-bold">${plant.name}</h2>
            <p class="text-gray-700">${plant.description}</p>
            <div class="flex justify-between items-center">
                <span class="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm">${plant.category}</span>
                <span class="text-xl font-bold">৳${plant.price}</span>
            </div>
            <button onclick="addtoCart('${plant.name}', ${plant.price})" class="mt-4 cursor-pointer font-normal w-full py-3 rounded-3xl bg-[#15803D] text-white">Add to Cart</button>
        </div>
    `;
    
    document.getElementById('trees-details').innerHTML = modalContent;
    my_modal_1.showModal();
}

// Add to cart function
function addtoCart(name, price) {
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    // Update total price
    totalPrice += price;
    
    // Update cart display
    updateCartDisplay();
    
    // Show confirmation (you could use a toast notification here)
    console.log(`Added ${name} to cart`);
}

// Update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('add-curt');
    const totalElement = document.getElementById('Total-taka');
    
    // Clear previous cart items
    cartContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
        totalElement.textContent = '0';
        return;
    }
    
    // Add each cart item
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex justify-between items-center mb-4';
        cartItem.innerHTML = `
            <div>
                <h3 class="font-medium">${item.name}</h3>
                <p class="text-sm text-gray-500">৳${item.price} x ${item.quantity}</p>
            </div>
            <div class="flex items-center">
                <button onclick="decreaseQuantity('${item.name}')" class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button onclick="increaseQuantity('${item.name}')" class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    // Update total
    totalElement.textContent = totalPrice;
}

// Increase item quantity
function increaseQuantity(name) {
    const item = cartItems.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
        totalPrice += item.price;
        updateCartDisplay();
    }
}

// Decrease item quantity
function decreaseQuantity(name) {
    const itemIndex = cartItems.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        const item = cartItems[itemIndex];
        item.quantity -= 1;
        totalPrice -= item.price;
        
        if (item.quantity === 0) {
            cartItems.splice(itemIndex, 1);
        }
        
        updateCartDisplay();
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.querySelector('form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const trees = this.querySelector('select').value;
            
            // Basic validation
            if (!name || !email || !trees) {
                alert('Please fill all fields');
                return;
            }
            
            // Process donation (in a real app, this would send to a server)
            alert(`Thank you, ${name}! Your donation for ${trees} has been received. We will contact you at ${email}.`);
            
            // Reset form
            this.reset();
        });
    }
});

// Hover effect for buttons (additional CSS would be needed)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hoverss');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});