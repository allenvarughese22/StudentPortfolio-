import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ProjectList: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.items);

  return (
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {"Task Manager"}
              </Typography>
              <Typography variant="body2">
                {`
                  Task Manager is a web application designed to manage tasks efficiently.
                  The user-friendly interface allows users to add, edit, and delete tasks with ease.
                  Leveraging React for the frontend and Redux for state management, the application provides a seamless experience.
                  The project showcases the use of hooks, CSS styling, and responsive design for a modern and visually appealing task management solution.
                `}
              </Typography>
              <div>
                <strong>Links:</strong>
                <ul>
                  <li>
                    <a href={"https://monumental-beignet-78bad0.netlify.app/"} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <a href={"https://github.com/NoahxAyyubi/Task-Manager"} target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
              {/* Add more project details as needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
