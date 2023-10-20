function countdown() {
    const halloweenDate = new Date(`October 31, ${new Date().getFullYear()}`);
    const currentDate = new Date();
  
    const totalSeconds = Math.floor((halloweenDate - currentDate) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;
  
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  countdown(); 
  setInterval(countdown, 1000);
  
