//------------------------------- Dark mode toggle

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("modeToggle");

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "Light Mode";
    } else {
        toggleButton.innerText = "Dark Mode";
    }

    // Add event listener for the button
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.innerText = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.innerText = "Dark Mode";
        }
    });
});



function welcome (){
    alert("You welcome !! ");
}
//window.addEventListener("load",function () {welcome()});
