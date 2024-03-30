// * burger menu
const btnBurger = document.querySelector(".burger_menu_btn");
const menuIconBtn = document.querySelector(".menu_icon_cross_btn");
const mobileMenu = document.querySelector(".mobile_menu");
btnBurger.addEventListener("click", () => {
    mobileMenu.classList.add("open_menu")
});
menuIconBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open_menu")
});

//*validation
let inputTel = document.querySelector(`input[type="tel"]`);
const forma = document.querySelector(".forma");
const inputs = document.querySelectorAll(".forma_input");
forma.addEventListener("submit", (e) => {
    inputs.forEach((input) => {
        if(input.value.trim() === ""){
            e.preventDefault();
            input.style.borderColor = "#ff0000";
        }else{
            input.style.borderColor = "#e4e4e4";  
            e.preventDefault();
        }
    })
});
let telMask = new Inputmask("+9-(999)-999-99-99");
telMask.mask(inputTel)

