const tabButtons = document.querySelectorAll(".tabs__header-btn");
const tabContents = document.querySelectorAll(".tabs__content");

tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        // 1. deacctivate all the buttons and content
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        // 2. activate the one which has been triggered
        tabButtons[index].classList.add("active");
        tabContents[index].classList.add("active");
    });
});
