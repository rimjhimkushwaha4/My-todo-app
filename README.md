# Todo Application with React Class Components

## Description

This is a simple Todo application built using React class components and Material-UI for styling. The application allows users to:

- Create a new task
- View the list of tasks
- Edit an existing task
- Delete a task

## Features

- React Class Components
- State Management with `this.state`
- Navigation using React Router (`react-router-dom`)
- Material-UI for styling
- Local Storage for data persistence

## Pages

1. **Create Task Page**: Users can create a new task or update an existing task. When editing a task, the form is pre-filled with the selected task's data, and the "Create" button changes to "Update".

2. **Todo List Page**: Displays all tasks with options to edit or delete them.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rimjhimkushwaha4/My-todo-app.git
   cd My-todo-app
   ```

Install dependencies:

npm install

Run the application:

npm start

src/
│
├── components/
│ ├── Navbar.js // Navbar component with navigation links
│
├── pages/
│ ├── CreateTodo.js // Create and Edit Todo Page
│ ├── TodoList.js // List of Todos with edit and delete options
│
├── App.js // Main application file with routes
├── index.js // ReactDOM render entry point
