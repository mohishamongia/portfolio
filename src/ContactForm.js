import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
function ContactForm(){
    return(
        <Box 
        component="form"
        action="https://formspree.io/f/movnolab"
        method="POST"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 500,
            margin: 'auto',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Send me a message!
          </Typography>
          <TextField label="Name" name="name" required />
          <TextField label="Email" type="email" name="email" required />
          <TextField label="Message" name="message" multiline rows={4} required />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Box>
      );
    }
    
    export default ContactForm;
    
