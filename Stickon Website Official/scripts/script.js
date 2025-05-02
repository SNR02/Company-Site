
// Nav Bar Logic

const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon span");
const items = document.querySelector(".nav-items");
const menuList = document.querySelectorAll(".nav-items li a");

// Function to handle screen resizing
const handleResize = () => {
  let screenWidth = window.innerWidth; // Use window.innerWidth instead of screen.width
  if (screenWidth >= 1024) {
    cancelBtn.style.display = "none";
    menuBtn.style.display = "none";
    items.classList.remove("active"); // Close menu in full-width view
  } else {
    if (items.classList.contains("active")) {
      cancelBtn.style.display = "block";
      menuBtn.style.display = "none";
    } else {
      cancelBtn.style.display = "none";
      menuBtn.style.display = "block";
    }
  }
};

// Initial check on page load
handleResize();

// Add resize event listener
window.addEventListener("resize", handleResize);

// Menu open/close actions
menuBtn.onclick = () => {
  cancelBtn.style.display = "block";
  menuBtn.style.display = "none";
  items.classList.add("active");
};

cancelBtn.onclick = () => {
  menuBtn.style.display = "block";
  cancelBtn.style.display = "none";
  items.classList.remove("active");
};

// Handle navigation link click (close the menu)
menuList.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      menuBtn.style.display = "block";
      cancelBtn.style.display = "none";
      items.classList.remove("active");
    }
  });
});

const subscribeForm = document.getElementById("subscribe-form");

document.addEventListener("click",function(e){
    if(e.target.classList.contains("subscribe-emailInpt")){
        subscribeForm.style.borderColor="#c93357"
    }
    else{
        subscribeForm.style.borderColor="#8e929d";
    }
})


// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:60,
      nav:true,
    //   autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
    });
  });

