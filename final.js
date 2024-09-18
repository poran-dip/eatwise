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

// Add event listeners to all temperature and sensitivity inputs
document.querySelectorAll('.temperature-input, .sensitivity-input').forEach(input => {
    input.addEventListener('input', updateOptimalTemperature);
});

// Initial calculation
updateOptimalTemperature();