function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('min-value').value, 10);
    const maxValue = parseInt(document.getElementById('max-value').value, 10);

    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
}