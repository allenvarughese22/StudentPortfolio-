import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the project data
interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string; // Add GitHub link field
  liveDemoLink: string; // Add live demo link field
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
        "The Task Manager is an intuitive and responsive web application developed using React, focused on simplifying daily task management. This project effectively demonstrates my skills in implementing CRUD (Create, Read, Update, Delete) operations and state management using React Hooks.\n\n It showcases: Efficient Task Handling - Incorporates full CRUD (Create, Read, Update, Delete) functionality with a user-friendly interface, leveraging React Hooks for state management. Aesthetic and Responsive Design - Utilizes CSS for a visually appealing layout, ensuring a smooth and responsive user experience. This project highlights my abilities in modern web development, focusing on user-centric application design.",
      githubLink: "https://github.com/NoahxAyyubi/Task-Manager",
      liveDemoLink: "https://monumental-beignet-78bad0.netlify.app/",
    },

    {
      id: 2,
      title: "To-Do List   ",
      description:
        "A dynamic To-Do List application, meticulously crafted using React, JavaScript, HTML, and CSS, offering an intuitive and responsive user interface for efficient task management. This project showcases full CRUD (Create, Read, Update, Delete) functionality, allowing users to effortlessly add, view, modify, and remove tasks with real-time updates. Leveraging the power of React's state management, the app ensures a seamless and interactive experience, keeping track of user's tasks with optimal performance. The design is clean and user-friendly, focusing on usability and accessibility, making it suitable for both personal and professional use. ",
      githubLink: "https://github.com/allenvarughese22/ToDoListCss",
      liveDemoLink: "https://master--magnificent-belekoy-ed387f.netlify.app/",
    },

    {
      id: 3,
      title: "Counter - Increment and Decrement  ",
      description:
        "This React-based Increment Counter application is an interactive and user-friendly tool that demonstrates the effective use of React's useState hook for state management. Crafted with a combination of JavaScript, TypeScript, HTML, and CSS, it features a sleek and intuitive interface that allows users to effortlessly increment and decrement a numerical value. The application's core functionality showcases the seamless integration of React's stateful logic, enabling dynamic updates to the counter in real-time. Designed with simplicity and functionality in mind, it provides a clear demonstration of handling user interactions and state changes in a modern web application.",
      githubLink: "https://github.com/allenvarughese22/task8",
      liveDemoLink: "https://master--magnificent-belekoy-ed387f.netlify.app/",
    },
    {
      id: 4,
      title: "Play with CSS- HTML  ",
      description:
        "This project is a sleek, single-page website, expertly crafted using HTML5 semantics, CSS, and JavaScript, showcasing a keen eye for modern web design principles and usability. The website features a clean, responsive layout, ensuring an optimal viewing experience across various devices and screen sizes. JavaScript is utilized to enhance interactivity and user engagement, making the website not only visually appealing but also functionally robust.",
      githubLink: "https://github.com/allenvarughese22/task5",
      liveDemoLink: "https://lighthearted-centaur-0fc0fd.netlify.app/",
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
    // Add more actions as needed
  },
});

// Export actions and reducer
export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
