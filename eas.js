const container = document.getElementById('container');
let grid_length = 16;

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';

    cell.addEventListener('mouseenter', function () {
      cell.style.backgroundColor = randomColor();
    });
  }
}

function newGrid(rows, cols) {
  grid_length = parseInt(
    window.prompt('How many squares per side for the new grid?', '16')
  );
  while (container.firstChild) {
    container.firstChild.remove();
  }
  makeRows(grid_length, grid_length);
}

makeRows(grid_length, grid_length);
