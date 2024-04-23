
document.addEventListener('DOMContentLoaded', function() {
    var phoneNumber = '123-456-7890';

    document.getElementById('phoneImg').addEventListener('click', function() {
        // Create a new window and set its content to the phone number
        var popupWindow = window.open('', '_blank', 'width=200,height=100');
        popupWindow.document.write(phoneNumber);

        // Set a timeout to close the window after 5 seconds
        setTimeout(function() {
            popupWindow.close();
        }, 5000);
    });
});

document.addEventListener('DOMContentLoaded',function(){
  const button = document.querySelector('.content-hero_button');
  button.addEventListener('mouseover',function(){
    button.classList.add('changed-coloredbtn');
  });
  button.addEventListener('mouseout', function() {
    button.classList.remove('changed-coloredbtn');
  });
});



