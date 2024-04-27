var toggleStates = {
    newDelhi: false,
    newYork: false,
    london: false,
    tokyo: false,
    paris: false
  };
  
  function showTime(city, timezone) {
    var options = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var currentTime = new Date().toLocaleString('en-US', options);
    var button = document.getElementById(city + 'Button');
  
    if (!toggleStates[city]) {
      button.textContent = currentTime;
      toggleStates[city] = true;
      button.style.backgroundColor = 'lightgreen'; 
      button.style.color = 'white'; 
      button.style.transition = 'background-color 0.5s, color 0.5s'; 
    } else {
      button.textContent = city.charAt(0).toUpperCase() + city.slice(1);
      toggleStates[city] = false;
      button.style.backgroundColor = ''; 
      button.style.color = '';
    }
  }
  
  
  var buttons = document.querySelectorAll('.cityButton');
  buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.1)'; 
      this.style.transition = 'transform 0.3s'; 
    });
    button.addEventListener('mouseout', function() {
      this.style.transform = ''; 
    });
  });