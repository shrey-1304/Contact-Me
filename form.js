let number = document.getElementById("pho");

number.addEventListener("input", (e) =>{
let input = e.target.value.replace(/\s+/g, '');

// Add a space after the first 5 digits
if (input.length > 5) {
  input = input.slice(0, 5) + ' ' + input.slice(5);
}

// Update the input value
e.target.value = input;
});

function scrollToTop(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // This ensures the scrolling is smooth
  });
}
