function addRandomDelay() {
    const shakyElements = document.querySelectorAll('.shaky_delay'); // Select all elements with class shaky.
  
    shakyElements.forEach(element => { // Do this for every shaky element.
      const randomDelay = Math.random() * 2; // Setting it to -3 means the animation 'begins' before the page is loaded.
      element.style.setProperty('--delay', `${randomDelay}s`); // Set the --delay variable to this random delay.
    });
  }
  
// Call the function when the page loads
window.addEventListener('load', addRandomDelay);

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
