const temperature = 55;
const windSpeed = 15;
const calculateWindChill = document.querySelector("#windchill");

if (temperature <= 50 && windSpeed > 3) {
    const windChill = 35.74
        + (0.6215 * temperature)
        - (35.75 * Math.pow(windSpeed, 0.16))
        + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    calculateWindChill.textContent = "${windChill.toFixed(1)}°F";
}
else {
    calculateWindChill.textContent = "N/A";
}
