// script.js

const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a"); // Select all navigation links

// Toggle navigation menu visibility on hamburger icon click
menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close the navigation menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");
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
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");

    // Show the popup
    popup.style.opacity = "1";
    popup.style.visibility = "visible";

    // Close the popup
    closeButton.addEventListener("click", function () {
        popup.style.opacity = "0";
        popup.style.visibility = "hidden";
    });
});