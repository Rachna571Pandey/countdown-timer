 const endDate="24 September 2022 9:25 PM"
 document.getElementById("end-date").innerText=endDate;
 
const inputs=document.querySelectorAll("input")

 function clock(){
    const end=new Date(endDate)
    const now =new Date()
    const diff=(end-now)/1000;  //result will be in sec.
    if(diff<0) return;    //minus value should not thatswhy this statement is included.
    
    //convert into days 
    inputs[0].value=(Math.floor(diff/3600/24)); 
    inputs[1].value=(Math.floor(diff/3600)%24); //calculate hours
    inputs[2].value=(Math.floor(diff/60)%60);//calculate minutes
    inputs[3].value=Math.floor(diff)%60;


 }
 clock()
 setInterval(
    ()=>{
        clock()
    },
    1000
 )