import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container, Avatar } from '@mui/material';

function About() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: 8,
        }}
      >
        <Box sx={{ textAlign: 'left', maxWidth: '60%' }}>
          <Typography variant="h3" gutterBottom>
            Hi! I am Mohisha
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Hi, I'm Mohisha, a CSE undergrad passionate about learning and building cool things!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/projects')}
            sx={{ paddingX: 4, paddingY: 1.5, fontSize: '1rem', boxShadow: 3 }}
          >
            View Projects
          </Button>
        </Box>

        <Avatar
          alt="Mohisha"
          src="mohisha_pic.jpg" // Replace with your image path
          sx={{ width: 150, height: 150, borderRadius: '50%', boxShadow: 3 }}
        />
      </Box>
    </Container>
  );
}

export default About;