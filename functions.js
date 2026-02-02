function flipCoin(){
  let coin = document.getElementById("coin");
  
  coin.classList.remove("heads","tails");

  void coin.offsetWidth;

  let randomNumber = Math.floor(Math.random() * 2) + 1; 
  
  setTimeout(function(){
     if(randomNumber == 1){
       coin.classList.add('heads');
       document.querySelector("#result").textContent = "Heads";
       console.log('It is head'); 
      } else {
         coin.classList.add('tails');
         document.querySelector("#result").textContent = "Tails";
         console.log('It is tails'); 
             } 
    } , 100);

}


 