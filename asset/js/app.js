window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.add("scrolled");
  }
};

// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   if (this.scrollY > 0) {
//     navbar.classList.add("shadow", "py-2");
//     navbar.classList.remove("py-4");
//   } else {
//     navbar.classList.add("shadow", "py-2");
//     navbar.classList.remove("py-4");
//   }
// });
