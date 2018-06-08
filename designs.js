// Select color input
let colorElem = document.getElementById('colorPicker');

// Select size input
let heightElem = document.getElementById('inputHeight');
let widthElem = document.getElementById('inputWidth');

let tableElem = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', makeGrid);

function makeGrid(event) {
  event.preventDefault();
  // Your code goes here!
  let h = heightElem.value;
  let w = widthElem.value;
  console.log('height ' + h + " width " + w);

  // Clear Table
  tableElem.innerHTML = '';

  for (let i = 0; i < heightElem.value; ++i) {
    let tr = document.createElement('tr');
    tableElem.appendChild(tr);

    for (let j = 0; j < widthElem.value; ++j) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }
  }

  // click delegation
  tableElem.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.nodeName === 'TD') {
      console.log('td clicked ' + colorElem.value);
      clickEvent.target.style.backgroundColor = colorElem.value;
    }
  })

}
