let countEL=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count = 0
 
function increment() {
    count += 1
    countEL.innerText=count
    console.log(count)
}
function save()
{
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEL.textContent=0
    count.textContent=0
    console.log(count)
} 



// let username="Saumya"
// let message="Hi, my name is"
// let messageToUser=message+" "+username+"."
// console.log(messageToUser)
 
// let points=4
// let bonusPoints="10"
// let tp=points+bonusPoints
// console.log(tp)
