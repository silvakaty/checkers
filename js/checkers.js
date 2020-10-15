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

  for (let i = 8; i >= 1; i--) {
    const numberLeft = document.createElement('div');
    numberLeft.innerHTML = i;
    numbers[0].appendChild(numberLeft);

    const numberRight = document.createElement('div');
    numberRight.innerHTML = i;
    numbers[1].appendChild(numberRight);
  }
};

const drawBoard = () => {
  // const board = document.querySelector('#board');
  const board = document.getElementById('board');
  const piecesPlayer1 = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22];
  const piecesPlayer2 = [41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63];

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (piecesPlayer1.indexOf(i) > -1) {
      const piece = document.createElement('div');
      piece.classList.add('piece-player1');
      cell.appendChild(piece);
    } else if (piecesPlayer2.indexOf(i) > -1) {
      const piece = document.createElement('div');
      piece.classList.add('piece-player2');
      cell.appendChild(piece);
    }
    board.appendChild(cell);
  }
};
