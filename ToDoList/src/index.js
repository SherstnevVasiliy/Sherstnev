let ulElement = document.querySelector('ul');

ulElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    } 
  }
);

function newElement() {
  let li = document.createElement('LI');
  let inputValue = document.getElementById('myInput').value;
  let txtValue = document.createTextNode(inputValue);
  li.appendChild(txtValue);
  if (inputValue == "") {
      alert('Поле не должно быть пустым...');
  } else {
      document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  span.onclick = function() {
  let div = this.parentElement;
  div.style.display = "none";
  }
}
