let btn = document.querySelector('button')
let ul = document.querySelector('.task ul')

if(localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks',JSON.stringify([]))
}


btn.onclick = function() {

    let inpValue = document.querySelector('input').value.trim(); 

    if (inpValue !== '') { 
        let arr = JSON.parse(localStorage.getItem('tasks'));

        arr.push({
            Task: inpValue
        });

        localStorage.setItem('tasks', JSON.stringify(arr));

        document.querySelector('input').value = ''

        GetTasks();
    }
    else {
        alert('Please enter a task!'); 
    }

};


function GetTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))

    let html = ''
    for (let task of tasks) {
        html += `
        <ul>
            <button class="editBtn">${task.Task}</button>
            <img class="deleteTask" src="./css/Group 56.png" alt="Delete">
            <i class="fa-regular fa-pen-to-square editTask"></i>
        </ul>
        `;
    }

    document.querySelector('.task').innerHTML = html;
}


GetTasks()





                            // remove ul

document.querySelector('.task').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteTask')) {
        let taskName = event.target.previousElementSibling.innerHTML;
        let tasks = JSON.parse(localStorage.getItem('tasks'));

        let index = tasks.findIndex(task => task.Task === taskName);

        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            GetTasks();
        }
    }
});



                            //edit

// document.querySelector('.task').addEventListener('click', function(event) {
//     if (event.target.classList.contains('editTask')) {
//         let taskName = event.target.previousElementSibling.previousElementSibling.innerHTML;
//         let tasks = JSON.parse(localStorage.getItem('tasks'));
//         let index = tasks.findIndex(task => task.Task === taskName);
//         if (index !== -1) {
//             tasks[index].Task = prompt('Enter new task name', tasks[index].Task);
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             GetTasks();
//         }
//         else{
//             alert('Task not found')
//         }
//     }
// });









                             // sort for alphabetically


let sortAlp = document.querySelector('.list__img .sort');

sortAlp.addEventListener('click', function() {
    let ascendingOrder = true;

    if (this.classList.contains('sorted')) {
        ascendingOrder = false;
        this.classList.remove('sorted');
    }
    else {
        this.classList.add('sorted');
    }

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);

    if (ascendingOrder) {
        tasks.sort((a, b) => a.Task.localeCompare(b.Task));
    }
    else {
        tasks.sort((a, b) => b.Task.localeCompare(a.Task));
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    GetTasks();

}); 




                            // sort for date




    


