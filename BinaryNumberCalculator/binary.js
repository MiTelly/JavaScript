function binaryConvert() {
  let num1 = document.getElementById('number').value;
  let numInput = parseInt(num1);

  let array1 = [];
  let binaryArray = [];

  for (let i=0; i < 10000000; i++) {
    if (Math.pow(2,i) < numInput) {
      array1.push(i);
    }
  }
  let P = array1[array1.length-1];

  for (let i=P; i>=0; i--) {
    if (Math.pow(2, i) <= numInput) {
      binaryArray.push('1');
      numInput = numInput - Math.pow(2, i);
    } else {
      binaryArray.push('0');
    }
  }

  let result = binaryArray.join('');
  document.getElementById('binary').textContent = result;
}
