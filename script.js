let alarmTime, ringtone = new Audio('./files/ringtone.mp3') , isAlarmSet;
    
let hrs = document.getElementById("hrs");;
  let mins = document.getElementById("mins");
  let secs = document.getElementById("secs");
  let h,m,s;
  setInterval(()=>{
    let currentTime = new Date();
    
  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  mins.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
  secs.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

  h = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  m = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
  s = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
  if(alarmTime==`${h}:${m}:${s}`){
    ringtone.play();
    ringtone.loop = true;
  }
  },1000);

  const openAlarmButtons = document.querySelectorAll('[data-open-target]');
  const closeAlarmButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  
  
  openAlarmButtons.forEach(button => {
    button.addEventListener('click',()=>{
      const alarm = document.querySelector(button.dataset.openTarget);
      openAlarm(alarm);
    }
    )
  })

  overlay.addEventListener('click',()=>{
    const alarms = document.querySelectorAll('.alarm.active');
    alarms.forEach(alarm => {
      closeAlarm(alarm);
    })
  }) 

 closeAlarmButtons.forEach(button => {
    button.addEventListener('click',()=>{
      const alarm = button.closest('.alarm');
      closeAlarm(alarm);
    }
    )
  })

  

  function openAlarm(alarm){
    if(alarm == null) return;
    alarm.classList.add('active');
    overlay.classList.add('active'); 
  }

  function closeAlarm(alarm){
    if(alarm == null) return;
    alarm.classList.remove('active');
    overlay.classList.remove('active') ; 
  }

  //set alarm

  const selectmenu = document.querySelectorAll('select');
  for(let i=24;i>=0;i--){
   i=i<10?"0"+i:i;
   let option = `<option value="${i}">${i}</option>`;
  selectmenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
  }

  for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0"+i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectmenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0"+i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectmenu[2].firstElementChild.insertAdjacentHTML('afterend', option);
}

const setAlarmbtn = document.querySelector(".button-13");
const openBtn = document.querySelector('#btn');
const closeBtn = document.querySelector('.stop');
function setAlarm(){

let time = `${selectmenu[0].value}:${selectmenu[1].value}:${selectmenu[2].value}`;
if(time.includes("Hour") || time.includes("Minutes") || time.includes("Seconds")){
  return alert("Please , select a valid time to set alarm");
}

alarmTime=time;
isAlarmSet = true;
openBtn.innerText = "Set Alarm";


}

function stopAlarm(){
if(isAlarmSet){
  alarmTime="";
  ringtone.pause();
  return isAlarmSet=false;
}
}
setAlarmbtn.addEventListener('click',setAlarm);
closeBtn.addEventListener('click',stopAlarm);
