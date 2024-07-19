let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnx = true

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6,],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnx = true
    enableBoxes();
    msgcontainer.classList.add("hide")
}


boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        console.log("box was clicked")
        if(turnx){
            box.innerText = "X"
            turnx = false
        }else{
            box.innerText = "O"
            turnx = true
        }
        box.disabled = true

        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes)
        box.disabled = true
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableBoxes()
}


const checkWinner = () => {
    for(let pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val)
                showWinner(pos1Val)
                
            }
        }
    }
}

newgamebtn.addEventListener("click" ,resetGame)
resetbtn.addEventListener("click" ,resetGame)

