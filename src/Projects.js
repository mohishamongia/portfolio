import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const myProjects = [
  {
    id: 'lightsync',
    title: 'LightSync',
    description: 'A web-based lighting control system for smart homes.',
    link: 'https://github.com/mohishamongia/LightSync',
  },
  {
    id: 'coin-classification',
    title: 'Coin Classification using neural network',
    description: 'An AI model to classify various types of coins from images.',
    link: 'https://github.com/mohishamongia/Coin-Classification',
  },
];

function Projects() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Here is a list of projects I have worked on!
        </Typography>

        {myProjects.map((project) => (
          <Box
            key={project.id}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              padding: 3,
              marginBottom: 3,
              width: '100%',
              maxWidth: 600,
              textAlign: 'left',
              boxShadow: 1,
            }}
          >
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1, marginBottom: 2 }}>
              {project.description}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate(`/projects/${project.id}`)} // Use navigate for internal links
            >
              View Details
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;