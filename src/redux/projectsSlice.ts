import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the project data
interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string; 
  liveDemoLink: string; 
}

// Initial state type
interface ProjectsState {
  items: Project[];
}

// Define the initial state
const initialState: ProjectsState = {
  items: [
    {
      id: 1,
      title: "Task Manager",
      description:
        "Task Manager is a web application designed to manage tasks efficiently. The user-friendly interface allows users to add, edit, and delete tasks with ease. Leveraging React for the frontend and Redux for state management, the application provides a seamless experience. The project showcases the use of hooks, CSS styling, and responsive design for a modern and visually appealing task management solution.",
        githubLink: "https://github.com/NoahxAyyubi/Task-Manager",
        liveDemoLink: "https://monumental-beignet-78bad0.netlify.app/"
  },
  {
    id: 2,
    title: "Todo List Application",
    description:
    "A task management solution where users efficiently add, complete, and categorize tasks. Leveraging React and optionally Redux for the frontend, with Node.js and Express.js for the backend if needed. MongoDB serves as the database, and additional tools like Axios, Moment.js, and Bootstrap/Material-UI enhance functionality and design. Features include task creation, completion, and organization, with due date settings for prioritization. The application ensures a seamless user experience with responsive design and optional features like drag-and-drop and user authentication for personalized task ",
    githubLink: "https://github.com/NoahxAyyubi/Task-9.git",
    liveDemoLink: "https://glittering-swan-80bc31.netlify.app/",
  },
  {
    id: 3,
    title: "TypeScript Fundementals",
    description: "This task involves working with TypeScript within a React Vite project, emphasizing core concepts like static typing and interfaces. Participants gain practical experience in implementing TypeScript features such as annotations, which provide additional type information. The project likely includes the use of Vite, a build tool for modern web development, enhancing the development workflow. By leveraging annotations and other TypeScript features, participants practice writing more robust and maintainable React code. This practical exercise offers a valuable opportunity to reinforce knowledge and skills related to TypeScript while incorporating modern development tools.",
    githubLink: "https://github.com/NoahxAyyubi/Task-7.git",
    liveDemoLink: "https://dazzling-stroopwafel-fd5158.netlify.app/",
  },
  {
    id: 4,
    title: "Object & Arrays",
    description: 
    "Embarked on a React and Vite adventure, mastering data manipulation, arrays, and objects for dynamic web applications. Leveraged React's power and Vite's efficiency, honing skills in crafting interactive interfaces. Strengthened proficiency in React, excelling in data manipulation, and handling arrays and objects expertly. Technologies: React, Vite, providing a solid foundation for efficient web development.",
    githubLink: "https://github.com/NoahxAyyubi/Task-6.git",
    liveDemoLink: "https://moonlit-paprenjak-83b3f0.netlify.app/",
  },
  ],
};

// Create the projects slice
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Action to add a new project
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload);
    },
    // Action to remove a project
    removeProject: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (project) => project.id !== action.payload
      );
    },
   
  },
});

// Export actions and reducer
export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
