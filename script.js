const p1Button=document.querySelector('#p1Button')
const p2Button=document.querySelector('#p2Button')
const p1Display=document.querySelector('#p1Display')
const p2Display=document.querySelector('#p2Display')
const reset=document.querySelector('#reset')
const winningScoreSelect=document.querySelector('#playTo')
let p1Score=0;
let p2Score=0;
let isGameOver=false;
p1Button.addEventListener('click',function(){
    if(!isGameOver){
      p1Score+=1;
      if(p1Score===winningScore){
        isGameOver=true;
        p1Display.style.color = "green"
        p2Display.style.color = "red"
        p1Button.disabled=true;
        p2Button.disabled=true;
      }
      p1Display.textContent=p1Score
    }
})
p2Button.addEventListener('click',function(){
    if(!isGameOver){
      p2Score+=1;
      if(p2Score===winningScore){
        isGameOver=true;
        p2Display.style.color = "green"
        p1Display.style.color = "red"
        p1Button.disabled=true;
        p2Button.disabled=true;
      }
      p2Display.textContent=p2Score
    }
})
function resetGame(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p2Display.style.color = "black"
    p1Display.style.color = "black"   
    p1Button.disabled=false;
    p2Button.disabled=false;
}
//after selecting new winnin score again scores should be set to 0
winningScoreSelect.addEventListener('change',function(){
        winningScore=parseInt(this.value);
        resetGame();
})
reset.addEventListener('click',resetGame)