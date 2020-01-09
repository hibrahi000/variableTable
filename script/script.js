// :: Attributes
const rowAdd = document.getElementById('rowAdd');
const rowRemove = document.getElementById('rowRemove');

const colAdd = document.getElementById('columnAdd');
const colRemove = document.getElementById('columnRemove');

const checkbox = document.getElementById('picOrColor');
const table = document.getElementById('table');

const colorSelectContainer = document.getElementById('colorSelectContainer');
const colorSelect = document.getElementById('colorSelect');
const imgSelectContainer = document.getElementById('imgSelectContainer');
const imgSelect = document.getElementById('imgSelect');

const fillAll = document.getElementById('fillAll');
const restore = document.getElementById('restore');

let style = '';
let clicked = false;

// ++ Row Functions

rowAdd.addEventListener('click', (e) => {
	let row = table.insertRow(table.rows.length);
	for (let i = 0; i < table.rows[0].cells.length; i++) {
		createCell(row.insertCell(i), '');
	}
});

rowRemove.addEventListener('click', (e) => {
	table.deleteRow(0);
});

// ++ Column Functions
colAdd.addEventListener('click', (e) => {
	for (let i = 0; i < table.rows.length; i++) {
		createCell(table.rows[i].insertCell(table.rows[i].cells.length), '');
	}
});
colRemove.addEventListener('click', (e) => {
	for (let i = 0; i < table.rows.length; i++) {
		let row = table.rows[i];
		row.deleteCell(length - 1);
	}
});

// ::  Table Preferences Atribues

// ++ Checkbox Functionality

window.addEventListener('change', (e) => {
	if (checkbox.checked === true) {
		colorSelectContainer.classList.contains('no-show') ? null : colorSelectContainer.classList.add('no-show');

		imgSelectContainer.classList.remove('no-show');
	} else {
		imgSelectContainer.classList.contains('no-show') ? null : imgSelectContainer.classList.add('no-show');

		colorSelectContainer.classList.remove('no-show');
	}
	let cellArr = document.querySelectorAll('.cell');
	cellArr.forEach((elm) => {
		elm.addEventListener('click', (e) => {
			setCellStyle(getSelectValue(), elm);
		});
	});
});

table.addEventListener('mouseover', (e) => {
	let cellArr = document.querySelectorAll('.cell');
	cellArr.forEach((elm) => {
		elm.addEventListener('mouseover', (e) => {
			if (clicked) {
				setCellStyle(getSelectValue(), elm);
			} else {
				console.log('not clicked so no go');
			}
		});
	});
});

table.addEventListener('mousedown', () => {
	clicked = true;
});
table.addEventListener('mouseup', () => {
	clicked = false;
});

// ++ Select Functionality
colorSelect.addEventListener('change', (e) => {
	console.log(colorSelect.value);
});

imgSelect.addEventListener('change', (e) => {
	console.log(imgSelect.value);
});

// ++  Fill All Functionality
fillAll.addEventListener('click', (e) => {
	let cellArr = document.querySelectorAll('.cell');
	cellArr.forEach((elm) => {
		setCellStyle(getSelectValue(), elm);
	});
});

// ++ Restore Functionality
restore.addEventListener('click', (e) => {});

//  ___ Utility Functions
let colors = [ 'bg-gray', 'bg-apple-green', 'bg-sea-green', 'bg-weldon-blue', 'bg-maast-blue' ];
let pictures = [ 'imgSteven', 'imgLawrence', 'imgLarry' ];

const getSelectValue = () => (checkbox.checked ? imgSelect.value : colorSelect.value);

const setCellStyle = (value, cell) => {
	resetCellColor(cell);
	switch (value) {
		case '---':
			break;
		case 'darkBlue':
			cell.classList.add(colors[4]);
			break;
		case 'lightBlue':
			cell.classList.add(colors[3]);
			break;
		case 'green':
			cell.classList.add(colors[2]);
			break;
		case 'apple':
			cell.classList.add(colors[1]);
			break;
		case 'gray':
			cell.classList.add(colors[0]);
			break;
		case 'steven':
			cell.classList.add(pictures[0]);
			break;
		case 'lawrence':
			cell.classList.add(pictures[1]);
			break;
		case 'larry':
			cell.classList.add(pictures[2]);
	}
};

const resetCellColor = (cell) => {
	cell.classList.remove(colors);
	cell.classList.remove('bg-sea-green');
	cell.classList.remove(pictures);
	cell.classList.remove(pictures);
};

const createCell = (cell, text) => {
	let div = document.createElement('div');
	div.setAttribute('class', `cell`);
	setCellStyle(getSelectValue(), div);
	cell.appendChild(div);
};
