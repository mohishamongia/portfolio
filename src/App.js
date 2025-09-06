import './App.css';
import About from './About.js';
import Projects from './Projects.js';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

// Separate component to use navigate inside Router context
function MainApp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <Box className="container">
      <Typography variant="h3" gutterBottom>
        Welcome to My Website
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
        sx={{
          paddingX: 4,
          paddingY: 1.5,
          fontSize: '1rem',
          boxShadow: 3,
        }}
      >
        View Projects
      </Button>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  );
}

// Wrap it with Router
export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
