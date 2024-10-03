let input = document.getElementById('new-task');
let list = document.getElementById('task-list');
let time = document.getElementById('time');

function addTask() {
    let taskValue = input.value;
    let timeValue = time.value;
    let error = document.getElementById('error');

    if (taskValue.trim() === '' || timeValue.trim() === '') {
        error.style.color = 'red';
        error.innerText = 'Sie müssen sowohl eine Aufgabe als auch eine Uhrzeit eingeben!';
    } else {
        error.innerText = '';

        let li = document.createElement('li');
        li.innerHTML = `${taskValue} - ${new Date(timeValue).toLocaleString()} ` +
            `<button onclick="deleteTask(this)"><img src="Icons/delete.png"></button>`;

        list.appendChild(li);

        input.value = '';
        time.value = '';
    }
}

function deleteTask(buttonElement) {
    let li = buttonElement.parentElement;
   li.remove()
}