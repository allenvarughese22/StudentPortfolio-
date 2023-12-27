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
              {/* Add link details */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
