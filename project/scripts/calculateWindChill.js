const windChill = document.querySelector("#windChill");
const temperature = 18; // Celsius
const wind = 11; // Kilometers per hour

function calculateWindChill(tempCelsius, windSpeed) {
  if (tempCelsius > 10 || windSpeed <= 4.8) {
    return "Wind Chill: N/A";
  }

  const windChillCelsius = 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
  return `Wind Chill: ${windChillCelsius.toFixed(2)} °C`;
}

const getWindChill = calculateWindChill(temperature, wind);
windChill.innerHTML = `${getWindChill}`;