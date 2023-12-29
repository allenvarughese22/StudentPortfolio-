import React from "react";
import { Container, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Contact.module.css";
const Contact: React.FC = () => {
  return (
    <Container className={styles.contactContainer}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <div className={styles.contactInfo}>
        <EmailIcon className={styles.icon} />
        <Link href="mailto:allenvarughese22@gmail.com" color="inherit">
          allenvarughese22@gmail.com
        </Link>
      </div>
      <div className={styles.contactInfo}>
        <LinkedInIcon className={styles.icon} />
        <Link
          href="https://www.linkedin.com/in/allen-varughese-7b2b5879/"
          target="_blank"
          color="inherit"
        >
          LinkedIn Profile
        </Link>
      </div>
      <div className={styles.contactInfo}>
        <GitHubIcon className={styles.icon} />
        <Link
          href="https://github.com/allenvarughese22"
          target="_blank"
          color="inherit"
        >
          GitHub Profile
        </Link>
      </div>
      {/* Add contact form or additional contact info here */}
    </Container>
  );
};

export default Contact;
