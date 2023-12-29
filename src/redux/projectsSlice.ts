import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the project data
interface Project {
  id: number;
  title: string;
  description: string;
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
    },
    // Add more initial projects as needed
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
