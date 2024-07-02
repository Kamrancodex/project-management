# Project Management Application

This Project Management Application is designed to help you manage your projects and tasks efficiently. It features project creation, task management, and responsive design to ensure a seamless experience across different devices.

## Features

- **Project Management**: Create, view, and delete projects. Each project can have a title, description, and due date.
- **Task Management**: Add and delete tasks associated with each project. Tasks help you keep track of the progress within each project.
- **Responsive Design**: The application is fully responsive, ensuring usability on different screen sizes, from mobile devices to desktops.
- **Validation and Modals**: Input validation with modal dialogs to alert users about missing information.
- **Dynamic Updates**: The application dynamically updates the project and task lists without needing to refresh the page.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Modern JavaScript features and syntax.
- **HTML5**: Markup language for structuring the application.
- **CSS3**: Styling for the application.

## React Features Used

- **useState**: Manages the state of functional components.
- **useRef**: Accesses and interacts with DOM elements directly.
- **useImperativeHandle**: Customizes the instance value that is exposed when using `ref`.
- **forwardRef**: Passes `ref` through a component to one of its children.
- **createPortal**: Renders children into a DOM node that exists outside the DOM hierarchy of the parent component.

## Folder Structure

```
├── src
│ ├── components
│ │ ├── App.js
│ │ ├── Sidebar.js
│ │ ├── NewProject.js
│ │ ├── SelectedProject.js
│ │ ├── Tasks.js
│ │ ├── NewTask.js
│ │ ├── Modal.js
│ │ ├── Input.js
│ │ ├── Button.js
│ │ └── NoProjectSelected.js
│ └── assets
│ └── no-projects.png
├── public
│ ├── index.html
│ └── ...
├── README.md
└── package.json
```

## Installation

1. **Clone the repository**:
   ```

   git clone https://github.com/yourusername/project-management-app.git
   cd project-management-app
   ```
   Install dependencies:

Copy code

```
npm install
```

**Start the development server:**

```
npm start
```

## Usage

**_Add a Project:_** Click on the "+ Add Project" button in the sidebar to create a new project.

**_Select a Project:_** Click on a project title in the sidebar to view its details and associated tasks.

**_Add a Task:_** Enter a task description and click "Add Task" to add a task to the selected project.

**_Delete a Task:_** Click the "Clear" button next to a task to delete it.

**_Delete a Project:_** Click the "delete" button in the project details to remove the project.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
