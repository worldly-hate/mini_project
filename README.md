# Task Tracker App

This Task Tracker app allows users to add, edit, and delete tasks. It provides a simple and intuitive interface to manage daily tasks.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [How it Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can see a live demo of the Task Tracker app [here](https://example.com/demo).

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- User-friendly interface

## Technology Stack
- **HTML**: For structuring and presenting content.
- **CSS**: For styling and layout.
- **JavaScript**: For dynamic functionality and interaction.

## How it Works

1. **User Input**: The user types a new task into the input field (`#task-input`) and clicks the "Add Task" button (`#add-task-btn`).
2. **Task Addition**: The JavaScript code adds the new task to the `tasks` array and updates the list display by calling the `displayTasks` function.
3. **Task Display**: The `displayTasks` function iterates over the `tasks` array and creates a list item (`<li>`) for each task. It also adds edit and delete buttons for each task.
4. **Edit Task**: When the user clicks the edit button, a prompt appears to enter the new task text. The JavaScript code updates the corresponding task in the `tasks` array and updates the list display.
5. **Delete Task**: When the user clicks the delete button, the JavaScript code removes the corresponding task from the `tasks` array and updates the list display.

### Key JavaScript Concepts Used
- **Event Listeners**: Used to listen for user interactions (button clicks, etc.) and respond accordingly.
- **DOM Manipulation**: Used to update the list display and add/remove tasks.
- **Arrays**: Used to store and manage the tasks.
- **Functions**: Used to organize and reuse code (e.g., `displayTasks` function).

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-tracker.git
    ```
2. Navigate to the project directory:
    ```bash
    cd task-tracker
    ```

## Usage
1. Open the `index.html` file in your web browser.
2. Type a task into the input field and click "Add Task".
3. Use the "Edit" and "Delete" buttons to manage your tasks.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.
