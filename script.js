document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num = document.getElementById('num').value;
    const conversion = document.getElementById('conversion').value;
    let result = '';

    switch (conversion) {
        case 'binToDec':
            result = parseInt(num, 2).toString(10);
            break;
        case 'decToBin':
            result = parseInt(num, 10).toString(2);
            break;
        case 'octToDec':
            result = parseInt(num, 8).toString(10);
            break;
        case 'decToOct':
            result = parseInt(num, 10).toString(8);
            break;
        case 'hexToDec':
            result = parseInt(num, 16).toString(10);
            break;
        case 'decToHex':
            result = parseInt(num, 10).toString(16).toUpperCase();
            break;
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});
