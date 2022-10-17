/* Block Celcius */
celciusreamur = () => {
  let input = document.getElementById('input').value;
  let hasil = (4 / 5) * input;
  document.getElementById('hasil').value = hasil;
};

/* Block Reamur */
reamurcelcius = () => {
  let input = document.getElementById('input1').value;
  let hasil = input / (4 / 5);
  document.getElementById('hasil1').value = hasil;
};

/* Block Fahrenheit */
fahrenheitcelcius = () => {
  let input = document.getElementById('input2').value;
  let hasil = (input - 32) / (9 / 5);
  document.getElementById('hasil2').value = hasil;
};

kelvinfahrenheit = () => {
  let input = document.getElementById('input3').value;
  let hasil = input * (9 / 5) - 459.67;
  document.getElementById('hasil3').value = hasil;
};
