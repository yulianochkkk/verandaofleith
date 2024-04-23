document.addEventListener('DOMContentLoaded', () =>{
    const username=document.getElementById('username');
    const surname=document.getElementById('surname');
    const email=document.getElementById('email');
    const phone_number=document.getElementById('phone_number');
    const calendar=document.getElementById('calendar');
    const guests = document.getElementById("guests");
    const form=document.getElementById('form');
    const username_error=document.getElementById('username_error');
    const email_error=document.getElementById('email_error');
    const surname_error=document.getElementById('surname_error');
    const guest_error=document.getElementById('guest_error');
    const ph_err=document.getElementById('phone_error');
    calendar_error = document.getElementById('calendar_error');

    
    
    form.addEventListener('submit', (e) =>
      
    {
        isValid = true;
        const email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phone_check=/^\d{11}$/;
       
    
        if(username.value === ""|| username.value===null)
        {  
            isValid = false;
            e.preventDefault();
            username_error.innerHTML="Name is required";
           
        }
        else
        {
            username_error.innerHTML="";
           
    
        }
        if(email.value === "" || email.value === null) {
            isValid = false;
            e.preventDefault();
            email_error.innerHTML="Enter an email";
        } else if(!email.value.match(email_check)) {
            isValid = false;
            e.preventDefault();
            email_error.innerHTML="Invalid email";
        } else {
            email_error.innerHTML="";
        }
       if(surname.value=== ""|| surname.value===null)
       {
           isValid = false;
           
           surname_error.innerHTML="Invalid surname";
       }
       else
       {
            surname_error.innerHTML="";
    
       }
       if(phone_number.value === "" || phone_number.value === null) {
        isValid = false;
        e.preventDefault();
        ph_err.innerHTML="Enter a phone number";
      } else if(!phone_number.value.match(phone_check)) {
        isValid = false;
        e.preventDefault();
        ph_err.innerHTML="Invalid number";
      } else {
        ph_err.innerHTML="";
      }
      if (calendar.value === "") {
        isValid = false;
        e.preventDefault();
        calendar_error.innerHTML = "Choose the date and time";
      } else {
        calendar_error.innerHTML = "";
      }
       
      if(guests.value === "Number of Guests:") {
        isValid = false;
        
        guest_error.innerHTML=" Choose the number of guests";
      } 
      else {
      guest_error.innerHTML="";
     }
     if (isValid) {
        form.submit();
      } else {
        e.preventDefault();
      }

    });
    
    });