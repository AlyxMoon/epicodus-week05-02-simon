// import $ from 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const pattern = [];

function generatePattern () {
  const randomNumber = Math.floor(Math.random() * 4);

  const options = ['red', 'green', 'blue', 'yellow'];

  pattern.push(options[randomNumber]);
}

generatePattern();
console.log('pattern 1', pattern);
generatePattern();
console.log('pattern 2', pattern);
generatePattern();
console.log('pattern 3', pattern);
generatePattern();
console.log('pattern 4', pattern);
