import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container, Avatar, Link } from '@mui/material'; // <-- You were missing 'Link' here

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
          <Typography variant="h2" gutterBottom>
            Hi! I am Mohisha
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            Hi, I'm Mohisha, a CSE undergrad passionate about learning and building cool things!
          </Typography>

          {/* This Box contains all three buttons side-by-side */}
          <Box sx={{ display: 'flex', gap: 4}}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/projects')}
              sx={{ paddingX: 4, paddingY: 1.5, fontSize: '1rem', boxShadow: 3, 
                '&:hover': {
      transform: 'translateY(-3px)', // Moves the button up
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)', // Adds a larger shadow
      backgroundColor: '#6b4f45',
              },
              '&:active': {
      transform: 'translateY(1px)', // Moves the button down
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Reduces the shadow
      backgroundColor: '#5d433b',
    },
                
            }}
            >
              View Projects
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/MongiaMohisha_Resume_final.pdf"
              target="_blank"
              sx={{ paddingX: 4, paddingY: 1.5, fontSize: '1rem', boxShadow: 3,
                '&:hover': {
      transform: 'translateY(-3px)', // Moves the button up
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)', // Adds a larger shadow
      backgroundColor: '#6b4f45',
              },
              '&:active': {
      transform: 'translateY(1px)', // Moves the button down
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Reduces the shadow
      backgroundColor: '#5d433b',
    },
               }}
            >
              View Resume
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/blog')}
              sx={{ paddingX: 4, paddingY: 1.5, fontSize: '1rem', boxShadow: 3,
                '&:hover': {
      transform: 'translateY(-3px)', // Moves the button up
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)', // Adds a larger shadow
      backgroundColor: '#6b4f45',
              },
              '&:active': {
      transform: 'translateY(1px)', // Moves the button down
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Reduces the shadow
      backgroundColor: '#5d433b',
    },
               }}
            >
              Blog Posts
            </Button>
          </Box>
        </Box>

        {/* This Box is for the Avatar */}
        
        <Box>
          <Avatar
            alt="Mohisha"
            src="mohisha_pic.jpg"
            sx={{ width: 250, height: 250, borderRadius: '50%', boxShadow: 3,
              
             }}
          />
        </Box>
      </Box>

      <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => navigate('/contact')} // This navigates to the new route
      sx={{paddingX: 4, paddingY: 1.5, fontSize: '1rem', boxShadow: 3}}
    >
      Contact Me
    </Button>

      {/* This is the new "Connect With Me" section, placed outside the main Box for proper layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 'auto',
          paddingBottom: 4,
        }}
      >
        <Typography variant='h4' gutterBottom>
          Connect With Me
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* This should be a normal 'mailto' link */}
          <Link href="mohishamongia20@gmail.com" color="inherit" underline="hover">
            Email
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" color="inherit" underline="hover">
            LinkedIn
          </Link>
          <Link href="github.com" target="_blank" rel="noopener" color="inherit" underline="hover">
          GitHub
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default About;