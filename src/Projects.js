import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

// Sample project data
const myProjects = [
  {
    id: 1,
    title: 'LightSync',
    description: 'description',
    link: 'lightsync.com',
  },
  {
    id: 2,
    title: 'Coin Classification using neural netweok',
    description: 'details',
    link: 'https://github.com/my-username/project-beta',
  },
 
];

function Projects() {
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
          Here’s a list of projects I’ve worked on!
        </Typography>

        {/* Map over the projects array to display each project */}
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
            <Button variant="outlined" href={project.link} target="_blank" rel="noopener noreferrer">
              View Details
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;