// The JavaScript remains the same as in the previous version
let itemCount = 0;

function createItemCard(id, data = {}) {
    const card = document.createElement('div');
    card.className = 'list-item';
    card.id = `item-${id}`;
    
    card.innerHTML = `
        <div class="input-group">
            <label for="name-${id}">Name of item</label>
            <input type="text" id="name-${id}" name="name-${id}" value="${data.name || ''}">
        </div>
        <div class="input-group">
            <label for="quantity-${id}">Quantity</label>
            <input type="text" id="quantity-${id}" name="quantity-${id}" value="${data.quantity || ''}">
        </div>
        <div class="input-group">
            <label for="temperature-${id}">Temperature (°F)</label>
            <input type="number" id="temperature-${id}" name="temperature-${id}" class="temperature-input" value="${data.temperature || '40'}">
        </div>
        <div class="input-group">
            <label for="sensitivity-${id}">Sensitivity</label>
            <input type="number" id="sensitivity-${id}" name="sensitivity-${id}" step="0.1" min="0.1" max="1.0" class="sensitivity-input" value="${data.sensitivity || '1.0'}">
        </div>
        <div class="input-group">
            <label for="expiry-${id}">Expiry date</label>
            <input type="date" id="expiry-${id}" name="expiry-${id}" value="${data.expiry || ''}">
        </div>
        <i class="fas fa-trash delete-item" onclick="deleteItemCard(${id})"></i>
    `;
    
    return card;
}

function addItemCard() {
    itemCount++;
    const newCard = createItemCard(itemCount);
    document.getElementById('item-list').appendChild(newCard);
    attachInputListeners(newCard);
    updateOptimalTemperature();
}

function deleteItemCard(id) {
    const card = document.getElementById(`item-${id}`);
    card.remove();
    updateOptimalTemperature();
}

function calculateOptimalTemperature() {
    const temperatureInputs = document.querySelectorAll('.temperature-input');
    const sensitivityInputs = document.querySelectorAll('.sensitivity-input');
    let sumTempSensitivity = 0;
    let sumSensitivity = 0;

    for (let i = 0; i < temperatureInputs.length; i++) {
        const temp = parseFloat(temperatureInputs[i].value) || 0;
        const sensitivity = parseFloat(sensitivityInputs[i].value) || 0;
        sumTempSensitivity += temp * sensitivity;
        sumSensitivity += sensitivity;
    }

    if (sumSensitivity === 0) return 33; // Default temperature if no items or all sensitivities are 0

    const optimalTemp = sumTempSensitivity / sumSensitivity;
    return Math.round(optimalTemp * 10) / 10; // Round to 1 decimal place
}

function updateOptimalTemperature() {
    const optimalTemp = calculateOptimalTemperature();
    document.getElementById('optimal-temp').textContent = `${optimalTemp}°F`;
}

function attachInputListeners(element) {
    element.querySelectorAll('.temperature-input, .sensitivity-input').forEach(input => {
        input.addEventListener('input', updateOptimalTemperature);
    });
}

function saveToLocalStorage() {
    const items = document.querySelectorAll('.list-item');
    const data = [];
    items.forEach(item => {
        const itemData = {};
        item.querySelectorAll('input').forEach(input => {
            itemData[input.name.split('-')[0]] = input.value;
        });
        data.push(itemData);
    });
    localStorage.setItem('smartFridgeData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('smartFridgeData'));
    if (data) {
        data.forEach((itemData, index) => {
            itemCount++;
            const newCard = createItemCard(itemCount, itemData);
            document.getElementById('item-list').appendChild(newCard);
            attachInputListeners(newCard);
        });
        updateOptimalTemperature();
    }
}

window.addEventListener('beforeunload', saveToLocalStorage);
window.addEventListener('load', loadFromLocalStorage);

// If no items were loaded, add one empty item card
if (itemCount === 0) {
    addItemCard();
}