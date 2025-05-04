document.addEventListener('DOMContentLoaded', function() {
  let coin = document.getElementById('coin');

  coin.addEventListener('click', function() {
    flipCoin();

    let flipResult = Math.random();
    coin.className = '';

    setTimeout(function() {
      if (flipResult <= 0.5) {
        coin.classList.add('heads');
        document.querySelector("#result").textContent = "Heads";

        console.log('It is head');
      } else {
        coin.classList.add('tails');
        document.querySelector("#result").textContent = "Tails";
        console.log('It is tails');
      }
    }, 100);
  });

  function flipCoin() {
    coin.classList.add('flip'); // Agrega una clase para la animación de giro
    
    
    setTimeout(function() {
      coin.classList.remove('flip');
    }, 1000); // Elimina la clase después de la animación para que pueda repetirse
  }
});

      