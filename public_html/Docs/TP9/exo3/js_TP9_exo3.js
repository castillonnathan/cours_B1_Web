/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const eventDate = new Date("2025-05-17T10:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("event-message").style.display = "block";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();