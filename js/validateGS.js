document.addEventListener('DOMContentLoaded', () =>{
    const username=document.getElementById('usernameVouchers');
    const surname=document.getElementById('surname2');
    const email=document.getElementById('email2');
    const phone_number=document.getElementById('ph2');
    const price = document.getElementById("price");
    const form=document.getElementById('form2');
    const username_error=document.getElementById('user_er');
    const email_error=document.getElementById('email2_er');
    const surname_error=document.getElementById('surname2_er');
    const price_error=document.getElementById('price_er');
    const ph2_er=document.getElementById('ph2_er');
    
    
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
        ph2_er.innerHTML="Enter a phone number";
      } else if(!phone_number.value.match(phone_check)) {
        isValid = false;
        e.preventDefault();
        ph2_er.innerHTML="Invalid number";
      } else {
        ph2_er.innerHTML="";
      }
     
       
      if(price.value === "Price of a voucher:") {
        isValid = false;
        
        price_error.innerHTML=" Choose the price";
      } 
      else {
      price_error.innerHTML="";
     }
     if (isValid) {
        form.submit();
      } else {
        e.preventDefault();
      }

    });
    
    });