document.addEventListener("DOMContentLoaded", function () {
    // Select the container and images
    var container = document.getElementById("carousel-container");
    var images = container.getElementsByClassName("carousel-image");
  
    // Set the index of the currently displayed image
    var currentIndex = 0;
  
    // Function to show the next image
    function showNextImage() {
      // Hide the current image with a sliding animation
      images[currentIndex].style.animation = "slideOut 1s";
      images[currentIndex].style.opacity = 0;
  
      // Move to the next image or loop back to the beginning
      currentIndex = (currentIndex + 1) % images.length;
  
      // Show the next image with a sliding animation
      images[currentIndex].style.animation = "slideIn 1s";
      images[currentIndex].style.opacity = 1;
  
      // Call the function again after 5 seconds
      setTimeout(showNextImage, 5000);
    }
  
    // Start the carousel
    showNextImage();
  });
  