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
    {project.title}
  </Typography>
  <Typography variant="body2">
    {project.description}
  </Typography>
  <div>
    <strong>Links:</strong>
    <ul>
      <li>
        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </li>
      <li>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
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