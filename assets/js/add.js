// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.getElementById("html").classList.add("overflow_x_hidden")
  document.body.classList.remove("overflow-hidden");
}, 2500);
//back to top
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");
  
    // Show the button when the user scrolls down 200px from the top
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  
    // Scroll back to the top when the button is clicked
    button.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  });
//nav-bar
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross");
    // document.querySelector(".nav-bar-bg").classList.toggle("backdrop-fliter");


}