import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

function Blog() {
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