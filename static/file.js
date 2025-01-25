//------------------------------- Dark mode toggle

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("modeToggle");

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "Switch to Light Mode";
    } else {
        toggleButton.innerText = "Switch to Dark Mode";
    }

    // Add event listener for the button
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.innerText = "Switch to Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.innerText = "Switch to Dark Mode";
        }
    });
});
//---------------------------------- Display visitor count

window.addEventListener("load", function () {
    let visit = document.getElementById("visitorCount");
    visit.textContent = parseInt(visit.textContent) + 1;
    console.log(visit.textContent);
})
