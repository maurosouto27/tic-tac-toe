const boxes = document.querySelectorAll('.box')
const PLAYER_X = 'X'
const PLAYER_O = 'O'

let currentTurn = true
let clicks = 0
let freez = false

boxes.forEach(b => {
  b.addEventListener('click', e => {
    if(freez || e.target.innerText!=='') return
    clicks++
    e.target.innerText = currentTurn ? PLAYER_X : PLAYER_O;
    currentTurn = !currentTurn
    if(clicks===9 || checkForWinner()) restart()
  })
})

const restart = () => {
  freez = true
  setTimeout(()=> {
    boxes.forEach(b => {
      b.innerText = ''
    })
    clicks = 0
    freez = false
  }, 1000)
}

const checkForWinner = () => {
  const player = !currentTurn ? PLAYER_X : PLAYER_O;

  return ((boxes[0].innerText===player && boxes[1].innerText===player && boxes[2].innerText===player)
      || (boxes[3].innerText===player && boxes[4].innerText===player && boxes[5].innerText===player)
      || (boxes[6].innerText===player && boxes[7].innerText===player && boxes[8].innerText===player))

      || ((boxes[0].innerText===player && boxes[3].innerText===player && boxes[6].innerText===player)
      || (boxes[1].innerText===player && boxes[4].innerText===player && boxes[7].innerText===player)
      || (boxes[2].innerText===player && boxes[5].innerText===player && boxes[8].innerText===player))

      || ((boxes[0].innerText===player && boxes[4].innerText===player && boxes[8].innerText===player)
      || (boxes[2].innerText===player && boxes[4].innerText===player && boxes[6].innerText===player))
}