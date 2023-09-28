let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let div =  document.getElementById("fighters2")
let buttonClick =  document.getElementById("fightersbutton")

buttonClick.addEventListener("click",function()
{ 

  let x = Math.floor(Math.random()*fighters.length)
 let y = Math.floor(Math.random()*fighters.length)
 
 div.textContent= fighters[x]+ " VS "+fighters[y]
})
