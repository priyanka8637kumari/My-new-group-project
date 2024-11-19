// Importing images used for each menu item
import burgerImage from "./images/burger.jpg";
import pastaImage from "./images/pasta.jpg";
import saladImage from "./images/salad.jpg";
import pizzaImage from "./images/pizza.jpg";

/* Generates the content for the Menu Page */
function createMenuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuPageContainer");

  // Define the inner HTML structure for the menu page
  menuDiv.innerHTML = `
    <h2>Our Menu</h2>
    
    <!-- Menu items grid layout -->
    <div class="menu-grid">
      
      <section class="portfolio-section">
        <h2 class="portfolio-title">Portfolio</h2>
        <div class="portfolio-container">
          <!-- Card 1 -->
          <div class="portfolio-card">
            <img src="assets/Sign-up form Screenshot 2024-11-19 at 09.36.08.png" alt="Project 1" class="portfolio-image" width="300px" height="200px">
            <div class="portfolio-content">
              <h3>Sign-Up form Project</h3>
              <p>It is a responsive and accessible user registration form. <br>Key concepts: form validation, input handling, and CSS styling.</p>
              <a href="https://github.com/prinsergioprin/sign-up-form
              " class="portfolio-button">Project Link</a>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="portfolio-card">
            <img src="assets/Etch-a-sketch Screenshot 2024-11-19 at 09.34.39.png" alt="Project 2" class="portfolio-image">
            <div class="portfolio-content">
              <h3>Etch-a-Sketch project</h3>
              <p>It is a fun and interactive browser-based drawing tool. <br>Key concepts: customizable grid, HTML, CSS, JavaScript Skills</p>
              <a href="https://github.com/prinsergioprin/etch-a-sketch-prinsergioprin" class="portfolio-button">Go somewhere</a>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="portfolio-card">
            <img src="assets/Tic Tac Toe.png" alt="Project 3" class="portfolio-image">
            <div class="portfolio-content">
              <h3>Tic Tac Toe Project</h3>
              <p>It is a classic implementation of the popular two-player strategy game.<br>Key concepts: DOM manipulation using JavaScript, HTML, and CSS</p>
              <a href="#" class="portfolio-button">Go somewhere</a>
            </div>
          </div></div></section>
  `;

  return menuDiv;
}

export default createMenuPage;
