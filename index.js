
document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll("nav li");

    setTimeout(function () {
        navItems.forEach(function (item, index) {
            setTimeout(function () {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300); // 300 milliseconds delay for each item
        });
    }, 500); // Initial delay of 500 milliseconds
});



