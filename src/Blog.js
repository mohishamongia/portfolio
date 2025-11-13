import React from 'react';
// import { useNavigate } from 'react-router-dom'; // <-- REMOVED
import { Box, Typography, Container } from '@mui/material'; // <-- REMOVED Button

function Blog() {
  // const navigate = useNavigate(); // <-- REMOVED

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
          WELCOME!
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Coming Soon
        </Typography>
      </Box>
    </Container>
  );
}

export default Blog;