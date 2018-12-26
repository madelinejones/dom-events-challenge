var button = document.getElementById("enter");
var dlt = document.getElementsByClassName('delete');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll('li');
var liItem = document.querySelector('li');

createDeleteEvent();

function inputLength() {
	return input.value.length; // Returns the length of the input value
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button"); // Initial creation of delete button 
	btn.appendChild(document.createTextNode(' ' + 'Delete')); // Changed the text of the button to say delete
	li.appendChild(document.createTextNode(input.value + ' ')); // Both adds the value of the input box to the li and adds a space after the input value for styling
	ul.appendChild(li); // Adds the li to the list
	input.value = ""; // Clears the input box
	li.appendChild(btn); // Adds the delete button to the li
	btn.classList.add('delete'); // Adds the delete class to the li to flow with initial styling
	// btn.onclick = deleteItem; Another option that works, but technically less HTML semantically correct since it doesn't append the class name of 'delete' to the newly added list items
	createDeleteEvent(); // Re-runs the addition of event listeners so that they're added to the new buttons
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} // If the length of the input value > 0, run the list element creation function
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} // If the enter button is pressed (keycode 13), run the list element creation function
}

function toggleDone() {
	this.classList.toggle('done'); // The item that is clicked will toggle the done class
}

function deleteItem() {
	this.parentNode.remove(); // Removes the parent node of the clicked button, the li
}

function createDeleteEvent() {
	for (var i = 0; i < dlt.length; i++) {
		dlt[i].addEventListener("click", deleteItem);
	} // Adds the event listeners to each delete button
}

button.addEventListener("click", addListAfterClick); // Adds an event listener to run the function that will check the input's length when clicked

for (var i = 0; i < liItems.length; i++) {
	liItems[i].addEventListener("click", toggleDone); // Adds an event listener to each li that will run the toggle function when clicked
}

input.addEventListener("keypress", addListAfterKeypress); // Adds an event listener to the input box that will run the function that checks if the enter button was pressed & the input's length

