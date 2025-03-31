document.addEventListener('DOMContentLoaded', function() {
  let coin = document.getElementById('coin');

  coin.addEventListener('click', function() {
    flipCoin();

    let flipResult = Math.random();
    coin.className = '';

    setTimeout(function() {
      if (flipResult <= 0.5) {
        coin.classList.add('heads');
        console.log('It is head');
      } else {
        coin.classList.add('tails');
        console.log('It is tails');
      }
    }, 100);
  });
});

function flipCoin() {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  document.querySelector("#result").textContent = result;
}
      