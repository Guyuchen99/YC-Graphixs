$(document).ready(function () {
  $(window).scroll(function () {
    // "this" refers to window
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  //Toggle Navbar
  $(".navbar-icon").click(function () {
    $(".header .navbar-menu").toggleClass("active");
    $(".header .navbar-icon").toggleClass("bx-x");
  });

  $(".navbar-item").click(function () {
    $(".header .navbar-menu").removeClass("active");
    $(".header .navbar-icon").removeClass("bx-x");
  });

  // Scroll Reveal
  ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 1500,
    delay: 150,
  });

  ScrollReveal().reveal(".home-content", { origin: "top" });
  ScrollReveal().reveal(".home-content h1", { origin: "left" });

  // Typed JS
  var typed = new Typed(".typing1", {
    strings: ["Software Developer", "Web Developer", "Youtuber", "Pianist", "Badminton Player"],
    startDelay: 1500,
    typeSpeed: 100,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["Software Developer", "Web Developer", "Youtuber", "Pianist", "Badminton Player"],
    typeSpeed: 100,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
  });

  // Shop Item Display
  let shopItems = document.querySelector(".shop .shop-items");
  shopItems.innerHTML += shopItems.innerHTML;
  
  let shopBtn = document.querySelectorAll(".shop .shop-btn-container .shop-btn");
  let speed = -2;

  let move = () => {
    // Calculate the new position
    let currentLeft = parseInt(shopItems.style.left) || 0;
    let newLeft = currentLeft + speed;

    // Reset position if we have scrolled past half the width of the container
    if (newLeft <= -shopItems.offsetWidth / 2) {
      newLeft = 0; 
    }
    // Reset position if we have scrolled too far to the right (unlikely with negative speed)
    if (newLeft > 0) {
      newLeft -= shopItems.offsetWidth / 2;
    }

    // Update the position
    shopItems.style.left = newLeft + "px";
  };

  let timer = setInterval(move, 30);

  shopItems.addEventListener("mouseover", function () {
    clearInterval(timer);
  });

  shopItems.addEventListener("mouseout", function () {
    timer = setInterval(move, 30);
  });

  shopBtn[0].onclick = function () {
    speed = -2;
  };

  shopBtn[1].onclick = function () {
    speed = 2;
  };
});
