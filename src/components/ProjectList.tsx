// ProjectList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Grid, Card, CardContent, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
              <div>
        <strong>Links:</strong>
        <ul>
          <li>
            <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </li>
          <li>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </Link>
          </li>
        </ul>
      </div>
              <Link component={RouterLink} to={`/projects/${project.id}`} color="primary">
                View Details
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;





