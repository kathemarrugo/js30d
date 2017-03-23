function setDay(){
  const secsline= document.querySelector('.secs-line');
  const minsline= document.querySelector('.mins-line');
  const hrsline= document.querySelector('.hrs-line');

  const now = new Date();
  const seconds = now.getSeconds();
  const minuts = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = ((seconds /60)*360)+90;
  const minutsDegree = ((minuts/60)*360)+90;
  const hoursDegree = ((hours/12)*360)+90;
  //console.log(minuts+" "+hours);
  secsline.style.transform =`rotate(${secondsDegree}deg)`;
  minsline.style.transform =`rotate(${minutsDegree}deg)`;
  hrsline.style.transform =`rotate(${hoursDegree}deg)`;
}
setInterval(setDay,1000);
