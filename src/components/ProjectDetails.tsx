import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { Container, Typography, Link, Box, Divider, Chip } from "@mui/material";

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams();
  const project = useSelector((state: RootState) =>
    state.projects.items.find((p) => p.id.toString() === projectId)
  );

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom component="h1">
        {project.title}
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="body1" paragraph style={{ fontStyle: "italic" }}>
        {project.description}
      </Typography>
      <Box marginTop={2} marginBottom={2}>
        <Typography variant="h6">Project Links:</Typography>
        {project.liveDemoLink && (
          <Link
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Chip
              label="Live Demo"
              clickable
              color="primary"
              style={{ marginRight: 10 }}
            />
          </Link>
        )}
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Chip label="GitHub Repo" clickable color="secondary" />
          </Link>
        )}
      </Box>
      {/* Add more details here */}
    </Container>
  );
};

export default ProjectDetails;
