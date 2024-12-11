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

  const textarea = document.querySelector('textarea');
  const charCounter = document.querySelector('#char-counter');
  const charLimit = 250;
  
  textarea.addEventListener('input', function () {
      const currentLength = this.value.length; // Get current character length
  
      // Update the character counter
      charCounter.textContent = `${currentLength} / ${charLimit}`;
  
      // Prevent additional characters from being added beyond the limit
      if (currentLength > charLimit) {
          // Trim the content to the allowed character limit
          this.value = this.value.slice(0, charLimit);
          charCounter.textContent = `${charLimit} / ${charLimit}`;
      }
  });
  
