
 const digital_clock = document.getElementById('clock')


function clock1() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Format the time
    const time = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
    
    // Update the clock by linking it to html
    digital_clock.innerHTML = time;
  }
  
  // Call updateClock function every second
  setInterval(clock1, 1000);
  