import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

interface ParamTypes {
  projectId: string;
}

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<ParamTypes>();
  const project = useSelector((state: RootState) =>
    state.projects.items.find((p) => p.id.toString() === projectId)
  );

  if (!project) {
    return <Typography>Project not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="body1">{project.description}</Typography>
      {/* Add more details here */}
    </Container>
  );
};

export default ProjectDetails;
