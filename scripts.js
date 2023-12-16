function calculate() {
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);

    if (!isNaN(inputA) && !isNaN(inputB)) {
        var result = inputA + inputB; // Modify this based on the actual calculation needed
        document.getElementById('result').textContent = 'Result: ' + result;
    } else {
        alert('Please enter valid numeric values for both inputs.');
    }
}

function toggleCalculatorSection() {
    var calculatorSection = document.getElementById('equationOfStateCalculators');
    calculatorSection.style.display = (calculatorSection.style.display === 'block') ? 'none' : 'block';
}


function calculateIdealGas() {
    var pressure = parseFloat(document.getElementById('igPressure').value);
    var volume = parseFloat(document.getElementById('igVolume').value);
    var temperature = parseFloat(document.getElementById('igTemperature').value);

    if (!isNaN(pressure) && !isNaN(volume) && !isNaN(temperature)) {
        var idealGasConstant = 8.314; // Ideal Gas Constant in J/(mol*K)
        var moles = pressure * volume / (idealGasConstant * temperature);
        document.getElementById('resultIdealGas').textContent = 'Moles of gas: ' + moles.toFixed(4) + ' mol';
    } else {
        alert('Please enter valid numeric values for all inputs.');
    }
}

function calculateVanDerWaalsVolume() {
    var pressure = parseFloat(document.getElementById('vdwPressure').value); // in bar
    var temperature = parseFloat(document.getElementById('vdwTemperature').value); // in Kelvin
    var criticalPressure = parseFloat(document.getElementById('vdwCriticalPressure').value); // in bar
    var criticalTemperature = parseFloat(document.getElementById('vdwCriticalTemperature').value); // in Kelvin

    if (!isNaN(pressure) && !isNaN(temperature) && !isNaN(criticalPressure) && !isNaN(criticalTemperature)) {
        var R = 0.0831446; // gas constant in liter-bar/(K*mol)

        // van der Waals volume calculation
        var a = 27 * Math.pow(R, 2) * Math.pow(criticalTemperature, 2) / (64 * criticalPressure);
        var b = R * criticalTemperature / (8 * criticalPressure);

        // Calculate volume using van der Waals equation
        var volume = (R * temperature) / pressure - b - (a / pressure) * Math.pow(pressure, 2);

        document.getElementById('resultVDWVolume').textContent = 'Volume: ' + volume.toFixed(4) + ' liters';
    } else {
        alert('Please enter valid numeric values for all inputs.');
    }
}

function calculateVolume() {
    var pressure = parseFloat(document.getElementById('pressure').value); // in bar
    var temperature = parseFloat(document.getElementById('temperature').value); // in Kelvin
    var criticalPressure = parseFloat(document.getElementById('criticalPressure').value); // in bar
    var criticalTemperature = parseFloat(document.getElementById('criticalTemperature').value); // in Kelvin
    var accentricFactor = parseFloat(document.getElementById('accentricFactor').value);

    if (!isNaN(pressure) && !isNaN(temperature) && !isNaN(criticalPressure) && !isNaN(criticalTemperature) && !isNaN(accentricFactor)) {
        var R = 0.0831446; // gas constant in liter-bar/(K*mol)

        // Peng-Robinson volume calculation
        var a = 0.45724 * Math.pow((R * criticalTemperature), 2) / criticalPressure;
        var b = 0.07780 * R * criticalTemperature / criticalPressure;

        // Calculate volume using Peng-Robinson equation
        var volume = (R * temperature) / pressure - b - (a / pressure) * Math.pow((Math.pow(pressure, 2) / (R * Math.pow(temperature, 2))), 0.5);

        document.getElementById('resultVolume').textContent = 'Volume: ' + volume.toFixed(4) + ' liters';
    } else {
        alert('Please enter valid numeric values for all inputs.');
    }
}

function calculateRKVolume() {
    var pressure = parseFloat(document.getElementById('rkPressure').value); // in bar
    var temperature = parseFloat(document.getElementById('rkTemperature').value); // in Kelvin
    var criticalPressure = parseFloat(document.getElementById('rkCriticalPressure').value); // in bar
    var criticalTemperature = parseFloat(document.getElementById('rkCriticalTemperature').value); // in Kelvin
    var accentricFactor = parseFloat(document.getElementById('rkAccentricFactor').value);

    if (!isNaN(pressure) && !isNaN(temperature) && !isNaN(criticalPressure) && !isNaN(criticalTemperature) && !isNaN(accentricFactor)) {
        var R = 0.0831446; // gas constant in liter-bar/(K*mol)

        // Redlich-Kwong volume calculation
        var a = 0.42748 * Math.pow((R * criticalTemperature), 2.5) / criticalPressure;
        var b = 0.08664 * R * criticalTemperature / criticalPressure;

        // Calculate volume using Redlich-Kwong equation
        var volume = (R * temperature) / pressure - b - (a / (pressure * Math.pow(temperature, 0.5))) * Math.pow((Math.pow(pressure, 2) / (R * Math.pow(temperature, 2))), 0.5);

        document.getElementById('resultRKVolume').textContent = 'Volume: ' + volume.toFixed(4) + ' liters';
    } else {
        alert('Please enter valid numeric values for all inputs.');
    }
}

function calculateSRKVolume() {
    var pressure = parseFloat(document.getElementById('srkPressure').value); // in bar
    var temperature = parseFloat(document.getElementById('srkTemperature').value); // in Kelvin
    var criticalPressure = parseFloat(document.getElementById('srkCriticalPressure').value); // in bar
    var criticalTemperature = parseFloat(document.getElementById('srkCriticalTemperature').value); // in Kelvin
    var accentricFactor = parseFloat(document.getElementById('srkAccentricFactor').value);

    if (!isNaN(pressure) && !isNaN(temperature) && !isNaN(criticalPressure) && !isNaN(criticalTemperature) && !isNaN(accentricFactor)) {
        var R = 0.0831446; // gas constant in liter-bar/(K*mol)

        // Soave-Redlich-Kwong volume calculation
        var a = 0.42748 * Math.pow((R * criticalTemperature), 2.5) / (criticalPressure * Math.pow(1 + 0.480 + 1.574 * accentricFactor - 0.176 * Math.pow(accentricFactor, 2), 2));
        var b = 0.08664 * R * criticalTemperature / (criticalPressure * (1 + 0.480 * accentricFactor));

        // Calculate volume using Soave-Redlich-Kwong equation
        var volume = (R * temperature) / pressure - b - (a / (pressure * Math.pow(temperature, 0.5))) * Math.pow((Math.pow(pressure, 2) / (R * Math.pow(temperature, 2))), 0.5);

        document.getElementById('resultSRKVolume').textContent = 'Volume: ' + volume.toFixed(4) + ' liters';
    } else {
        alert('Please enter valid numeric values for all inputs.');
    }
}
