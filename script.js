const drawValue = document.querySelector(".btn")


function drawNumber() {
    const firstInput = Math.ceil(document.querySelector(".first-input").value)
    const secondInput = Math.floor(document.querySelector(".second-input").value)

    const result = Math.floor(Math.random() * (secondInput - firstInput + 1)) + firstInput;
    
    alert(result)
}

drawValue.addEventListener("click", drawNumber)
