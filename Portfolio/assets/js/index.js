let navigationLinks = document.querySelectorAll("[data-nav-link]");
let pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
            }

            else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
        
    });
}




// // Mobile View Btns

// const btnLinks = document.querySelectorAll("[data-btn-link]");
// const page = document.getElementById("[content]");

// for (let i = 0; i < btnLinks.length; i++) {
//     btnLinks[i].addEventListener("click", function() {
//         for (let i = 0; i < page.length; i++) {
//             if (this.innerHTML.toLowerCase() === page[i].getElementById.page) {
//                 page[i].classList.add("active");
//                 btnLinks[i].classList.add("active");
//             }

//             else {
//                 page[i].classList.remove("active");
//                 btnLinks[i].classList.remove("active");
//             }
//         }
//     });
// }

const showUp = document.querySelector(".contact-info");
const personal = document.querySelector(".information");

showUp.addEventListener("click", () => {
    showUp.classList.toggle("action");
    personal.classList.toggle("action");
} )