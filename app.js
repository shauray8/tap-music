window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sounds")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "#4aa47c",
        "#f35c75",
        "#50eb5d",
        "#e95cd1",
        "#ebe84d",
        "#5c66f1",

    ]





    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0
            sounds[index].play()


            createBubbles(index)
        })
    })

    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this)
        })
    }
})