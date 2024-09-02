// Slideshow functionality
let slideIndex = 1;
let autoSlideInterval = null;
showSlides(slideIndex);
startAutoSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlides();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlides();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0"; // Hide slides with opacity for fade effect
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        slides[slideIndex - 1].style.opacity = "1"; // Show slide with fade effect
    }, 50); // Delay to allow opacity transition
    dots[slideIndex - 1].className += " active";
}

// Auto slide functionality
function startAutoSlides() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds
}

function resetAutoSlides() {
    clearInterval(autoSlideInterval);
    startAutoSlides();
}

// Navbar toggle functionality
function toggleMenu() {
    var menu = document.getElementById("nav-links");
    menu.classList.toggle("active");
}

// Sticky Navbar on Scroll
window.onscroll = function() {
    let navbar = document.querySelector(".custom-navbar");
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

