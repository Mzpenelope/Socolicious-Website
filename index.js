function acc() {
  let phi = prompt("Enter your name?");
  let phill = prompt("Make an order?");
  let philll = prompt("Enter your phone number");
  let philly = prompt("Enter payment option");
  if (phill === "spaghetti" || phill === "indomine" || phill === "coffee") {
    let button = document.querySelector("button");
    button.innerHTML =
      "🤗🤗🤗<br />Thank you  " +
      phi +
      ".  Wait while we process your order, we will get back shortly.";
  } else {
    let button = document.querySelector("button");
    button.innerHTML =
      "😥<br />Sorry " +
      phi +
      ". We cannot proccess your order now. Please try again later.";
  }
}
let accbut = document.querySelector("button");
accbut.addEventListener("click", acc);

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

// Example: Toggle login form visibility
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const loginMessage = document.querySelector(".login-message");

  // Display login form when clicking the message
  loginMessage.addEventListener("click", function () {
    loginForm.style.display = "block";
  });

  // Hide login form when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !loginForm.contains(event.target) &&
      !loginMessage.contains(event.target)
    ) {
      loginForm.style.display = "none";
    }
  });
});
// Menu Page JavaScript

// Simulated user authentication
let isLoggedIn = false;

// Function to handle order submission
function placeOrder() {
  if (isLoggedIn) {
    alert("Order placed successfully!");
  } else {
    alert("Please log in or sign up to place an order.");
  }
}

function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function typeText(element, text, speed, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Call the callback function when the animation is complete
      if (callback) {
        callback();
      }
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const introParagraph = document.querySelector(".aintro");
  const beyondSatisfaction = document.querySelector(".bintro");

  // Speed of typing animation (adjust as needed)
  const typingSpeed = 50;

  // Trigger typing animation for the intro paragraph
  typeText(
    introParagraph,
    "Want to know what's better than a sumptuous meal? ",
    typingSpeed
  );

  // Delay before starting the second typing animation
  setTimeout(function () {
    // Trigger typing animation for the second paragraph
    typeText(
      beyondSatisfaction,
      'Dine with us for "A Beyond Satisfaction Experience" because life is too short to settle for just a sumptuous meal.',
      typingSpeed
    );
  }, 3000); // Adjust the delay time as needed (3 seconds in this example)
});