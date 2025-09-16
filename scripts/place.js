// Get the current year and set it in the footer
document.querySelector('#currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and set it in the footer
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Define static variables for the weather data
const temperature = 10; // in Celsius
const windSpeed = 5; // in km/h

// Function to calculate the wind chill factor
const calculateWindChill = (temp, speed) => {
  // Use the formula for wind chill in metric units (Celsius and km/h)
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
};

// Check if the conditions for a viable wind chill calculation are met
if (temperature <= 10 && windSpeed > 4.8) {
  // Call the function and get the result, rounded to one decimal place
  const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
  // Display the wind chill factor on the page
  document.querySelector('#windchill').textContent = `${windChill}°C`;
} else {
  // If conditions are not met, display "N/A"
  document.querySelector('#windchill').textContent = "N/A";
}