window.onload = () => {
  drawLetters();
  drawNumbers();
  drawBoard();
};

const drawLetters = () => {
  const letters = document.querySelectorAll('.letters');
  const lettersArray = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

  for (let i = 0; i < lettersArray.length; i++) {
    const letterTop = document.createElement('div');
    letterTop.innerHTML = lettersArray[i];
    letters[0].appendChild(letterTop);

    const letterBottom = document.createElement('div');
    letterBottom.innerHTML = lettersArray[i];
    letters[1].appendChild(letterBottom);
  }
};

const drawNumbers = () => {
  const numbers = document.querySelectorAll('.numbers');

  for (let i = 0; i < 8; i++) {
    const numberLeft = document.createElement('div');
    numberLeft.innerHTML = i + 1;
    numbers[0].appendChild(numberLeft);

    const numberRight = document.createElement('div');
    numberRight.innerHTML = i + 1;
    numbers[1].appendChild(numberRight);
  }
};

const drawBoard = () => {
  // const board = document.querySelector('#board');
  const board = document.getElementById('board');

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
};
