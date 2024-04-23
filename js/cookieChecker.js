 

  function main() {
    const bookButton = document.getElementById('content-button');
    bookButton.addEventListener('click', tableBooking);
  
    function tableBooking() {
      const usernameInput = document.getElementById('username').value;
      const calendarInput = document.getElementById('calendar').value;
  
     
      if (checkBooking(usernameInput, calendarInput)) {
        alert('You have already booked for this date');
      } else {
        setCookie(usernameInput, calendarInput);
      }
    }
  
    function setCookie(usernameInput, calendarInput) {
      const cookie = `${usernameInput}=${calendarInput};path=/`;
      document.cookie = cookie;
      let expiryDate = new Date();
      expiryDate.setTime(expiryDate.getTime() + (24 * 60 * 60 * 1000)); // Cookie will expire in 24 hours
      let expires = "expires=" + expiryDate.toUTCString();
  
      return true;
    }
  
    function checkBooking(usernameInput, calendarInput) {
      const cookies = document.cookie.split(';');
      const lastCookie = cookies[cookies.length - 1]; 
      const cookieParts = lastCookie.split('='); 
      
      if (cookieParts[0].trim() === usernameInput && cookieParts[1].trim() === calendarInput) {
        return true;
      }
      return false;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    main();
  });



  
  