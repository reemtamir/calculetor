'use-strict';

// 1. create two inputs for numbers and selector for +/-/*/**//  and a button
// 2. with each button click show the user the result of the operation selected on both numbers
const div = document.createElement('div');
document.body.appendChild(div);

div.classList.add('row', 'w-50', 'm-auto');
const firstNumLabel = document.createElement('label');
firstNumLabel.innerHTML = 'First number';
firstNumLabel.classList.add('fs-3');
const firstNumInput = document.createElement('input');
firstNumInput.classList.add('col-3');
firstNumInput.type = 'number';
const secondNumLabel = document.createElement('label');
secondNumLabel.innerHTML = 'Second number';
secondNumLabel.classList.add('fs-3');
const secondNumInput = document.createElement('input');
secondNumInput.classList.add('col-3');
secondNumInput.type = 'number';
const selectLabel = document.createElement('label');
selectLabel.innerHTML = 'Selector';
selectLabel.classList.add('fs-3');
const selector = document.createElement('select');
const option1 = document.createElement('option');
option1.classList.add('opt');
option1.innerHTML = '+';
option1.value = '+';
selector.appendChild(option1);

const option2 = document.createElement('option');
option2.classList.add('opt');
option2.innerHTML = '-';
option2.value = '-';
selector.appendChild(option2);

const option3 = document.createElement('option');
option3.classList.add('opt');
option3.innerHTML = '*';
option3.value = '*';
selector.appendChild(option3);

const option4 = document.createElement('option');
option4.classList.add('opt');
option4.innerHTML = '/';
option4.value = '/';
selector.appendChild(option4);

const option5 = document.createElement('option');
option5.classList.add('opt');
option5.innerHTML = '**';
option5.value = '**';
selector.appendChild(option5);

const calculatorBtn = document.createElement('button');
calculatorBtn.innerHTML = 'Calculate';
calculatorBtn.classList.add('btn', 'btn-primary', 'mt-2', 'w-50', 'm-auto');
calculatorBtn.setAttribute('onclick', 'calculate()');
const resultLabel = document.createElement('label');
resultLabel.innerHTML = 'Result';
resultLabel.classList.add('fs-3');
const resultInput = document.createElement('input');
resultInput.classList.add('col-3');
resultInput.type = 'text';

div.append(
  ...[
    firstNumLabel,
    firstNumInput,
    secondNumLabel,
    secondNumInput,
    selectLabel,
    selector,
    resultLabel,
    resultInput,
    calculatorBtn,
  ]
);

selector.classList.add('col-12');

const card = document.createElement('div');
card.classList.add('cards', 'mt-5');
document.body.appendChild(card);
function calculate() {
  let chooseOpts = document.querySelectorAll('.opt');
  for (let key of chooseOpts) {
    if (key.selected) {
      switch (key.value) {
        case '+':
          resultInput.placeholder =
            Number(firstNumInput.value) + Number(secondNumInput.value);

          break;
        case '-':
          resultInput.placeholder =
            Number(firstNumInput.value) - Number(secondNumInput.value);

          break;
        case '*':
          resultInput.placeholder =
            Number(firstNumInput.value) * Number(secondNumInput.value);

          break;
        case '/':
          resultInput.placeholder =
            Number(firstNumInput.value) / Number(secondNumInput.value);

          break;
        case '**':
          resultInput.placeholder =
            Number(firstNumInput.value) ** Number(secondNumInput.value);

          break;
      }
    }
  }
}
