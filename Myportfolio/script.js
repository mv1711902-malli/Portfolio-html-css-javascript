console.log("Welcome to my portfolio!");

const sections = document.querySelectorAll("section");

sections.forEach(function(section) {
    console.log("Portfolio section:", section.id);
});