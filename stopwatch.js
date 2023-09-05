window.onload=function(){
    const watch= document.getElementById("watch")
    const pause = document.getElementById("pause")
    const stop = document.querySelector(".stop")
    
    
    let interval;
    const btn = document.getElementById("btn")
    let secs = 0
    let min = 0
    let hrs = 0  
    let leadsecs = 0
    let leadmin = 0
    let leadhrs = 0  
 
    
 function trove(){
      secs++
     if (secs == 60){
         secs = 0
         min++
         if(min == 60){
             min = 0
             hrs++
         }
     }
     if (secs < 10){
         leadsecs = "0" + secs.toString()
     }else{
         leadsecs = secs
     }if (min < 10){
         leadmin = "0" + min.toString()
     }else{
         leadmin = min
         }
        leadhrs = hrs
        
 let display = watch.innerText = `${leadhrs} : ${leadmin} : ${leadsecs}`
 btn.style.display ="none"
      return display  }
    
 btn.addEventListener("click",()=>{
     
  interval = window.setInterval(trove, 1)
 })
 
 pause.addEventListener("click",()=>{
     clearInterval(interval)
     btn.style.display= "block"
 })
 stop.addEventListener("click",()=>{
     watch.innerText = "00:00:00"
    
 })
 
 
 
 
    
}
