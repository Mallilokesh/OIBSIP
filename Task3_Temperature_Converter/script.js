function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    let conversion = document.getElementById("conversion").value;

    let result = document.getElementById("result");
    let error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    if (temp === "" || isNaN(temp)) {
        error.innerHTML = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);

    let converted;

    switch (conversion) {
        case "CtoF":
            converted = (temp * 9 / 5) + 32;
            result.innerHTML = `${converted.toFixed(2)} °F`;
            break;

        case "FtoC":
            converted = (temp - 32) * 5 / 9;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;

        case "CtoK":
            converted = temp + 273.15;
            result.innerHTML = `${converted.toFixed(2)} K`;
            break;

        case "KtoC":
            converted = temp - 273.15;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;

        case "FtoK":
            converted = ((temp - 32) * 5 / 9) + 273.15;
            result.innerHTML = `${converted.toFixed(2)} K`;
            break;

        case "KtoF":
            converted = ((temp - 273.15) * 9 / 5) + 32;
            result.innerHTML = `${converted.toFixed(2)} °F`;
            break;
    }
}
