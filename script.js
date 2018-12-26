var button = document.getElementById("enter");
var dlt = document.getElementsByClassName('delete');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll('li');
var liItem = document.querySelector('li');

createDeleteEvent();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode(' ' + 'Delete'));
	li.appendChild(document.createTextNode(input.value + ' '));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(btn);
	btn.classList.add('delete');
	// btn.onclick = deleteItem; Another option that works, but technically less HTML semantically correct since it doesn't append the class name of 'delete' to the newly added list items
	createDeleteEvent();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle('done');
}

function deleteItem() {
	this.parentNode.remove();
}

function createDeleteEvent() {
	for (var i = 0; i < dlt.length; i++) {
		dlt[i].addEventListener("click", deleteItem);
	}
}

button.addEventListener("click", addListAfterClick);

for (var i = 0; i < liItems.length; i++) {
	liItems[i].addEventListener("click", toggleDone);
}

input.addEventListener("keypress", addListAfterKeypress);

