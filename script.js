const activeSelection = document.getElementsByClassName("rating-button");
const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const rate = document.getElementById("rate")
const button = document.getElementById("submit-button");
let activeRate = 0;

const active = (e) =>{
    activeSelection[e-1].className += " rating-button-active"
    if(activeRate !== 0) activeSelection[activeRate-1].classList.remove("rating-button-active")
    activeRate = e
}

button.addEventListener("click", (evn)=>{
    evn.preventDefault()
    if (activeRate === 0) return
    
    firstCard.className += " hidden";
    secondCard.classList.remove("hidden")
    rate.textContent += activeRate
})