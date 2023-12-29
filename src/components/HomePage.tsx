import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
// Add more icons as needed

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        style={{ padding: "20px", marginTop: "30px", background: "#f5f5f5" }}
      >
        <Typography
          variant="h2"
          gutterBottom
          component="h1"
          style={{ textAlign: "center", color: "#3f51b5" }}
        >
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          style={{ textAlign: "center" }}
        >
          Hi, I'm Noah, a software developer with a knack for front-end
          and back-end technologies.
        </Typography>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
            <CodeIcon style={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              Java & JavaScript
            </Typography>
            <Typography variant="body1">
              Building robust applications with a focus on clean, efficient
              code.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
            <ComputerIcon style={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              React Development
            </Typography>
            <Typography variant="body1">
              Creating responsive and interactive user interfaces.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
            <StorageIcon style={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              Spring & APIs
            </Typography>
            <Typography variant="body1">
              Designing and integrating efficient back-end solutions.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" paragraph style={{ marginTop: "20px" }}>
          My journey in technology is fueled by a passion for learning and
          innovation, always aiming to contribute impactful solutions in the
          tech space.
        </Typography>
      </Paper>
      {/* Add more content or styling here */}
    </Container>
  );
};

export default HomePage;
