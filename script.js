// DOM elements
const taskDescriptionInput = document.getElementById('task-description');
const timeSlotSelect = document.getElementById('time-slot');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterTimeSelect = document.getElementById('filter-time');
const currentDateDiv = document.getElementById('current-date');

// Tasks array
let tasks = [];

// Display current date
function displayCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateDiv.textContent = now.toLocaleDateString('en-US', options);
}

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('dailyPlannerTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('dailyPlannerTasks', JSON.stringify(tasks));
}

// Add task
function addTask() {
    const description = taskDescriptionInput.value.trim();
    const timeSlot = timeSlotSelect.value;

    if (description === '' || timeSlot === '') {
        alert('Please enter a task description and select a time slot.');
        return;
    }

    const task = {
        id: Date.now(),
        description,
        timeSlot,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskDescriptionInput.value = '';
    timeSlotSelect.value = '';
}

// Render tasks
function renderTasks() {
    const filter = filterTimeSelect.value;
    const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.timeSlot === filter);

    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''} ${getTimeClass(task.timeSlot)}`;

        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
            <div class="task-details">
                <div class="task-description">${task.description}</div>
                <div class="task-time">${task.timeSlot}</div>
            </div>
            <div class="task-actions">
                <button class="delete-btn" data-id="${task.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}

// Get time class for color coding
function getTimeClass(timeSlot) {
    const now = new Date();
    const currentHour = now.getHours();

    if (timeSlot === 'Morning' && currentHour >= 6 && currentHour < 12) {
        return 'current';
    } else if (timeSlot === 'Afternoon' && currentHour >= 12 && currentHour < 18) {
        return 'current';
    } else if (timeSlot === 'Evening' && currentHour >= 18 && currentHour < 22) {
        return 'current';
    } else if ((timeSlot === 'Morning' && currentHour >= 12) ||
               (timeSlot === 'Afternoon' && currentHour >= 18) ||
               (timeSlot === 'Evening' && currentHour >= 22)) {
        return 'past';
    } else {
        return 'upcoming';
    }
}

// Toggle task completion
function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    renderTasks();
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);

taskDescriptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

filterTimeSelect.addEventListener('change', renderTasks);

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
        const taskId = parseInt(e.target.dataset.id);
        toggleTaskCompletion(taskId);
    } else if (e.target.classList.contains('delete-btn') || e.target.closest('.delete-btn')) {
        const taskId = parseInt(e.target.dataset.id || e.target.closest('.delete-btn').dataset.id);
        deleteTask(taskId);
    }
});

// Initialize app
displayCurrentDate();
loadTasks();
renderTasks();
