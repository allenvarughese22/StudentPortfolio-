import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">
        Email: example@example.com
      </Typography>
      <Typography variant="body1">
        LinkedIn: [LinkedIn Profile]
      </Typography>
      <Typography variant="body1">
        GitHub: [GitHub Profile]
      </Typography>
      {/* Add contact form or additional contact info here */}
    </Container>
  );
};

export default Contact;
