const activeSelection = document.getElementsByClassName("rating-button");
const firstCard = Object.values(document.getElementsByClassName("first-card"));
const secondCard = Object.values(document.getElementsByClassName("second-card"));
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
    console.log(firstCard)
    firstCard.map(e=>{
        e.className += " hidden"
    })
    secondCard.map(e =>{
        e.classList.remove("hidden")
    })
    rate.textContent += activeRate
})