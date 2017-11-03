// Write a function to render 10 <button> elements on the page, 
// numbered 1 through 10, and alert the number of the chosen button 
// when one is clicked. Do **not** use jQuery or any other libraries.

var buttons = function() {
  for(var i = 1; i <= 10; i++) {
    var div = document.createElement('div');
    var button = document.createElement('button');
    button.classList.add('button' + i);
    var textNode = document.createTextNode('Button: ' + i);
    button.appendChild(textNode);
    button.setAttribute('data', i);
    button.onclick = function (element) {
      alert(this.getAttribute('data'));
    };
    div.appendChild(button);
    document.body.appendChild(div);
  }
};
document.addEventListener('DOMContentLoaded', function() {
  buttons();
}, false);
