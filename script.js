// script.js

const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a"); // Select all navigation links

// Toggle navigation menu visibility on hamburger icon click
menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto'; // Prevent body scrolling when menu is active
});

// Close the navigation menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        nav.classList.remove("active");
        document.body.style.overflow = 'auto'; // Allow body scrolling after menu is closed

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");

        // Scroll to the section with an offset
        const targetSection = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: targetSection.offsetTop - 7 * 16, // Offset for header height (7rem = 7 * 16px)
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

// Update active link on scroll
window.addEventListener("scroll", () => {
    let currentSection = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Popup functionality
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");

    // Show the popup with a smooth fade-in effect
    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.visibility = "visible";
    }, 300); // Delay popup appearance to avoid immediate pop-up on load

    // Close the popup
    closeButton.addEventListener("click", function () {
        popup.style.opacity = "0";
        popup.style.visibility = "hidden";
    });
});

// Adjust popup styling for mobile and tablet view
window.addEventListener("resize", function () {
    const popupContent = document.querySelector('.popup-content');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Tablet and mobile screens
        popupContent.style.width = "90%"; // Ensure popup fits within the screen
    } else {
        popupContent.style.width = "50%"; // Reset to default for larger screens
    }
});
