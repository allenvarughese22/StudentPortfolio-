import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{ padding: "20px", marginTop: "30px", background: "#f5f5f5" }}
      >
        <Typography
          variant="h3" // Keeping the reduced size
          gutterBottom
          component="h1"
          sx={{
            textAlign: "center",
            color: "#0d47a1", // Changed to a dark blue color
            fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          Code, Create, Innovate: <br /> Allen's Portfolio
        </Typography>

        <Typography
          variant="subtitle1"
          paragraph
          sx={{ textAlign: "center", fontStyle: "italic" }}
        >
          Hello, I'm <strong>Allen</strong>, a versatile{" "}
          <strong>
            <i>software craftsman</i>
          </strong>{" "}
          weaving the art and science of technology. Specializing in both{" "}
          <strong>front-end</strong> and <strong>back-end</strong> realms, my
          journey in coding is a tapestry of <strong>creative design</strong>{" "}
          and <strong>robust engineering</strong>, where each line of code is a
          brushstroke that brings digital canvases to life.
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          sx={{ textAlign: "center", fontStyle: "italic" }}
        >
          Bridging aesthetics with functionality, I thrive in sculpting user
          experiences and architecting server-side solutions, embodying the
          fusion of a <strong>tech-savvy innovator</strong> and a{" "}
          <strong>digital artist</strong>.
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px", textAlign: "center" }}
        >
          <Grid item xs={12} md={4}>
            <CodeIcon sx={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              Java & JavaScript
            </Typography>
            <Typography variant="body1">
              Building robust applications with a focus on clean, efficient
              code.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <ComputerIcon sx={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              React Development
            </Typography>
            <Typography variant="body1">
              Creating responsive and interactive user interfaces.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <StorageIcon sx={{ fontSize: "48px", color: "#3f51b5" }} />
            <Typography variant="h6" gutterBottom>
              Spring & APIs
            </Typography>
            <Typography variant="body1">
              Designing and integrating efficient back-end solutions.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" paragraph sx={{ marginTop: "20px" }}>
          My journey in technology is fueled by a passion for learning and
          innovation, always aiming to contribute impactful solutions in the
          tech space.
        </Typography>
      </Paper>
    </Container>
  );
};

export default HomePage;
