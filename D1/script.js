function playSound(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio)return; //Finaliza si no se encuentra un audio para la tecla
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
   /*Para cada elemento del array de elementos con la clase key(Linea 54), se agregará
   el evento para definir si tuvo una transicion y asi remover el estilo del borde amarillo*/
   const keys = document.querySelectorAll('.key');
   keys.forEach(key => key.addEventListener('transitionend',removeTransition));
 }

 function removeTransition(e){
   if(e.propertyName !=='transform')return;
   console.log(e.propertyName);
   console.log(this);
   this.classList.remove('playing');
 }

  window.addEventListener('keydown',playSound);
