const images = [
    "./../images/greenpaletobay1.jpg",
    "./../images/greenpaletobay2.jpg",
    "./../images/greenpaletobay3.jpg"
  ];
  
  let currentIndex = 0;
  
  function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  
    document.getElementById("main-image").src = images[currentIndex];
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggle-text").addEventListener("click", function() {
      const additionalText = document.getElementById("additional-text");
  
      if (additionalText.style.display === "none") {
        additionalText.style.display = "block";
      } else {
        additionalText.style.display = "none";
      }
    });
  });