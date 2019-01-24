
function move(e){


  let movements = {
    x:{
      nw:-50,
      ne:50,
      sw:-50,
      se:50
    },

    y:{
      nw:-50,
      ne:-50,
      sw:50,
      se:50
    }
  }

  let clickedMove = e.target.classList[1]
  if(clickedMove){
  xMove = xMove + movements.x[clickedMove]
  yMove = yMove + movements.y[clickedMove]
  }
  boxContainer.style.transform=`translate(${xMove}px, ${yMove}px`
}

let boxContainer = document.querySelector("#box-container")
let xMove=0
let yMove=0

boxContainer.addEventListener("mouseover", move)
