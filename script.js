// Function to update the time in the status bar
function updateTime() {
  const timeElement = document.querySelector('.status-bar .time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Initial update of the time when the page loads
updateTime();
