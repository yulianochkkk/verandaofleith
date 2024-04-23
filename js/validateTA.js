document.addEventListener('DOMContentLoaded', () =>{
    const username=document.getElementById('username_ta');
    const surname=document.getElementById('surname_ta');
    const email=document.getElementById('email_ta');
    const phone_number=document.getElementById('ph_ta');
    const calendar=document.getElementById('date2');
    const address = document.getElementById('address')
    
    const form=document.getElementById('form3');
    const username_error=document.getElementById('username_errorTA');
    const email_error=document.getElementById('email_errorTA');
    const surname_error=document.getElementById('surname_errorTA');
    const calendar_error = document.getElementById('date2_error')
    const address_err=document.getElementById('address_error');
    const phone_error= document.getElementById('ph_TA');

    
    
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
        if(address.value === ""|| address.value===null)
        {  
            isValid = false;
            e.preventDefault();
            address_err.innerHTML="Address is required";
           
        }
        else
        {
            address_err.innerHTML="";
           
    
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
        phone_error.innerHTML="Enter a phone number";
      } else if(!phone_number.value.match(phone_check)) {
        isValid = false;
        e.preventDefault();
        phone_error.innerHTML="Invalid number";
      } else {
        phone_error.innerHTML="";
      }
      if (calendar.value === "") {
        isValid = false;
        e.preventDefault();
        calendar_error.innerHTML = "Choose the date and time";
      } else {
        calendar_error.innerHTML = "";
      }
       
      
     if (isValid) {
        form.submit();
      } else {
        e.preventDefault();
      }

    });
    
    });