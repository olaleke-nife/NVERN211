// script.js

function handleSubmit(event) { event.preventDefault(); alert("Thank you for reaching out to NVERN! We’ll get back to you shortly."); event.target.reset(); }

// Highlight the current page in the navbar window.addEventListener('DOMContentLoaded', () => { const navLinks = document.querySelectorAll('nav a'); const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => { if (link.getAttribute("href") === currentPage) { link.classList.add("active"); } }); });
