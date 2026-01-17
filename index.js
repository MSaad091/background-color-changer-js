const start = document.getElementById('start')
const stop = document.getElementById('stop')
let intervalid;



const randomColor = function () {
  let hex = '0123456789ABCDEF'
let color = '#'
for (let i = 0; i < 6; i++) {
    // setInterval()
    color += hex[Math.floor(Math.random() * 16)]
    
}  
return color
}
const startChnageColor = function () {
    intervalid = setInterval(changeBgColor,500)
   function changeBgColor(){
     document.body.style.backgroundColor = randomColor()
   }
}
const stopcolor = function() {
    clearInterval(intervalid)
}
stop.addEventListener('click',stopcolor )
start.addEventListener('click',startChnageColor)
console.log(Math.random([]));
