'use strict';

var toAdd = '';
var toAppend = document.getElementById('display');
var structure = [];
function eachRecursive(obj) {
  for (var k in obj) {

    if (typeof obj[k] == "object" && obj[k] !== null) {

      if (isNaN(k)) {
        makeChild(toAdd + k, 0); //object with children
        structure.push(k);
      } else {
        toAdd = toAdd.substring(1, toAdd.length);
      }
      toAdd += '-';
      eachRecursive(obj[k]);
      console.log(structure.pop());
      toAdd = toAdd.substring(1, toAdd.lenghth);
    } else {

      if (isNaN(k)) {
        makeChild(toAdd + k, 0); //No Children, print
      }
    }
  }
}

function makeChild(toAdd, isHead) {

  var addMe = document.createElement('span');
  addMe.innerHTML = isHead ? toAdd + '<em>[HAS CHILDREN]</em>' : toAdd;
  addMe.className = structure.toString().replace(/,/g, '.');
  addMe.addEventListener('click', function(){ alert('Access this via: ' + $(this).attr('class') + '.' + $(this).text().replace(/-/g, '')); }, false);

  toAppend.appendChild(addMe);

  addMe = document.createElement('br');
  toAppend.appendChild(addMe);
}

function convertJSON() {

  toAppend.innerHTML = "";

  var JSONVar = document.getElementById('JSON').value;
  eachRecursive(JSON.parse(JSONVar));
}
