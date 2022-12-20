//Javascript til vores burger menu
//brugt at når du trykker på vores menu icon så ser man menupunkterne under headeren
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})