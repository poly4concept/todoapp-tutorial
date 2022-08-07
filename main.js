const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const taskContainer = document.querySelector("#tasks");
const errorText = document.querySelector("#error-text")

const createElementWithClass = (elementType, className) => {
	const currentElement = document.createElement(elementType)
	currentElement.classList.add(className)
	return currentElement
}
	
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const task = input.value;

	if (task.length < 1) {
		errorText.style.display = "flex";
		return
	} else {
		errorText.style.display = "none";
	}

	const taskDiv = createElementWithClass('div', 'task')

	const taskText = createElementWithClass('div', 'content')

	taskDiv.appendChild(taskText);

	const taskInput = createElementWithClass('input', 'text')
	taskInput.type = 'text';
	taskInput.value = task;
	taskInput.setAttribute('readonly', 'readonly');

	taskText.appendChild(taskInput);

	const taskActions = createElementWithClass('div', 'actions')
	
	const editButton = createElementWithClass('button', 'edit')
	editButton.innerText = 'Edit';

	const deleteButton = createElementWithClass('button', 'delete')
	deleteButton.innerText = 'Delete';

	taskActions.appendChild(editButton);
	taskActions.appendChild(deleteButton);

	taskDiv.appendChild(taskActions);

	taskContainer.appendChild(taskDiv);

	input.value = '';

	editButton.addEventListener('click', (e) => {
		if (editButton.innerText.toLowerCase() === "edit") {
			editButton.innerText = "Save";
			taskInput.removeAttribute("readonly");
			taskInput.focus();
		} else {
			editButton.innerText = "Edit";
			taskInput.setAttribute("readonly", "readonly");
		}
	});

	deleteButton.addEventListener('click', (e) => {
		taskContainer.removeChild(taskDiv);
	});
});

