// TODO: write code here

const container = document.querySelectorAll('.container div');

setInterval(() => {
  const position = Math.floor(Math.random() * container.length);
  for (let i = 0; i < container.length; i += 1) {
    container[i].classList.remove('gb');
  }
  container[position].classList.add('gb');
}, 1000);
