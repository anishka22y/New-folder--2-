
      // Array of colors (one color will be the odd one out)
      const colors = ["green", "blue", "red", "black"];
  
      // Get all color boxes
      const colorBoxes = document.querySelectorAll(".colors > div");
  
      // Randomly select the odd color out
      const oddColorIndex = Math.floor(Math.random() * colors.length);
      const oddColor = colors[oddColorIndex];
  
      // Set the odd color as the correct answer
      const correctAnswer = document.querySelector(`.${oddColor}`);
      const chooseColorText = document.querySelector(".choose-the-color");
      chooseColorText.textContent = `Choose the color that doesn’t belong (${oddColor})`;
  
      // Add click event listeners to color boxes
      colorBoxes.forEach((colorBox) => {
        colorBox.addEventListener("click", function () {
          // Check if the clicked color is the correct answer
          if (this === correctAnswer) {
            alert("Correct! You chose the odd color out.");
          } else {
            alert("Oops! Try again.");
          }
        });
      });
    