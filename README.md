# Personal Daily Planner

A responsive and interactive web application that allows users to plan their daily tasks, set reminders, and organize their schedule. This project helps learners understand layout structuring, form handling, DOM manipulation, and persistent storage using localStorage in a real-world context.

🔗 **Live Link:**  
https://daily-planner-rho-silk.vercel.app/

## Features

### Core Features
- **Header Section**: Displays the app title and current date.
- **Task Input Section**: Input field for task description, time slot selector (Morning, Afternoon, Evening), and Add Task button.
- **Task Display Section**: List of tasks with corresponding time, checkbox to mark tasks as done, and delete button for each task.
- **Storage**: Uses localStorage to save tasks even after page reloads.

### Optional Enhancements
- **Filter Tasks**: Filter tasks by time of day (Morning, Afternoon, Evening).
- **Color-coded Time Blocks**: Visual indicators for past, current, and upcoming tasks based on the current time.
- **Responsive Design**: Mobile-friendly interface with smooth animations on task addition/removal.

## Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3**: Flexbox/Grid for layout, responsive design with media queries.
- **JavaScript**: DOM manipulation, event handling, localStorage for persistence.
- **Font Awesome**: Icons for better UI.
- **Google Fonts**: Roboto font for typography.

## Setup Instructions

1. Clone or download the project files.
2. Open `index.html` in a web browser.
3. The application will load and display the current date.
4. Start adding tasks using the input fields.

No additional setup or dependencies are required as this is a vanilla JavaScript project.

## Usage

1. **Add a Task**:
   - Enter a task description in the input field.
   - Select a time slot (Morning, Afternoon, Evening).
   - Click the "Add Task" button or press Enter.

2. **Mark Task as Done**:
   - Check the checkbox next to a task to mark it as completed (strikethrough effect).

3. **Delete a Task**:
   - Click the trash icon next to a task to remove it.

4. **Filter Tasks**:
   - Use the filter dropdown to view tasks for a specific time slot or all tasks.

5. **Persistence**:
   - Tasks are automatically saved to localStorage and will persist across browser sessions.

## Concepts Demonstrated

- Semantic HTML layout and forms
- CSS Flexbox/Grid for responsive layout
- JavaScript DOM manipulation (addEventListener, createElement, etc.)
- Conditional rendering and event handling
- Use of localStorage for data persistence
- Date and time manipulation for color-coding
- Responsive design with media queries
- UI/UX principles for intuitive interaction

## Optional Enhancements Implemented

- Color-coded time blocks based on current time:
  - Past tasks: Light red background
  - Current time slot: Light orange background
  - Upcoming tasks: Light green background
- Filter functionality to view tasks by time slot
- Smooth animations for task addition/removal
- Mobile-responsive design

## Browser Support

This application works in all modern browsers that support ES6 JavaScript features and localStorage.

## Future Improvements

- Add a simple calendar view
- Include motivational quotes or productivity tips
- Implement drag-and-drop for task reordering
- Add reminder notifications (requires additional libraries or service worker)

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
