// ProjectList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Grid, Card, CardContent, Typography, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProjectList: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.items);

  return (
    <Grid container spacing={1}>
      {projects.map(project => (
        <Grid item xs={6} sm={3} key={project.id}>
          <Card style={{ backgroundColor: '#ADD8E6' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <div>
                <strong>Links:</strong>
                <ul>
                  <li>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      component={Link}
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      component={Link}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </Button>
                  </li>
                </ul>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={RouterLink}
                to={`/projects/${project.id}`}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
