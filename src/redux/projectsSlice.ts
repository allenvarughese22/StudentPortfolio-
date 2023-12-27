import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the project data
interface Project {
  id: number;
  title: string;
  description: string;
  // Add other project fields as needed
}

// Initial state type
interface ProjectsState {
  items: Project[];
}

// Define the initial state
const initialState: ProjectsState = {
  items: [
    // Populate with initial project data or leave it empty
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
