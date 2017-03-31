// Source: https://www.w3schools.com/howto/howto_js_todolist.asp

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click to remove the item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.parentElement.removeChild(this.parentElement);
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newGroceryItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Je hebt nog niks ingevuld.");
  } else {
    document.getElementById("myGroceryList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.parentElement.removeChild(this.parentElement);
    }
  }
}
