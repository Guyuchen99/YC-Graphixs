$(document).ready(function () {
  $(window).scroll(function () {
    // "this" refers to window
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
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
    strings: [
      "Software Developer",
      "Web Developer",
      "Youtuber",
      "Pianist",
      "Badminton Player",
    ],
    startDelay: 1500,
    typeSpeed: 100,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: [
      "Software Developer",
      "Web Developer",
      "Youtuber",
      "Pianist",
      "Badminton Player",
    ],
    typeSpeed: 100,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
  });
});
