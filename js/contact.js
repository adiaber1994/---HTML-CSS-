const hamburger = document.querySelector(".hamburger")
const NavMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    NavMenu.classList.toggle("active")
})

let countDownDate = new Date("june 6, 2023 00:00:00").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let houers = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    



    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = houers;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;

    if (dateDiff< 0) {
        clearInterval(counter);
    }


},1000)