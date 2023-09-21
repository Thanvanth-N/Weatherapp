async function getWeather() {
    const location = document.getElementById('locationInput').value;
  
    if (location.trim() === '') {
      alert('Please enter a location.');
      return;
    }
  
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } else {
        alert('Weather data not found. Please try a different location.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  