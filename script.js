const section = document.querySelector(".section");
const ragisterlink = document.querySelector(".ragister-link");
const loginlink = document.querySelector(".login-link");

ragisterlink.addEventListener("click", () => {
    section.classList.add("active");
});
loginlink.addEventListener("click", () => {
    section.classList.remove("active");
});