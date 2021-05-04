/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function myFuunction() {
    document.getElementById("myDroopdown").classList.toggle("shoow");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.droopbtn')) {
      var dropdownss = document.getElementsByClassName("droopdown-content");
      var i;
      for (i = 0; i < dropdownss.length; i++) {
        var openDroopdown = dropdownss[i];
        if (openDroopdown.classList.contains('shoow')) {
          openDroopdown.classList.remove('shoow');
        }
      }
    }
  } 
  