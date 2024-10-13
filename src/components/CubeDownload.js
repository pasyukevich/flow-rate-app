import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function CubeDownload() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#000000' }}>
        Download 3D Cube Model
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#000000' }}>
        Click the button below to download the cube model in STL format for 3D printing:
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        href="/public/files/cube.stl"
        download
        sx={{ mb: 3, color: '#000000' }}
      >
        Download Cube
      </Button>

      <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
        How to Slice the Cube
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1. Open your favorite slicing software (e.g., Cura, PrusaSlicer)." primaryTypographyProps={{ color: '#000000' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Import the cube model you downloaded." primaryTypographyProps={{ color: '#000000' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Set your desired layer height, infill, and print speed." primaryTypographyProps={{ color: '#000000' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Slice the model and save it as a G-code file." primaryTypographyProps={{ color: '#000000' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Load the G-code onto your 3D printer and start printing!" primaryTypographyProps={{ color: '#000000' }} />
        </ListItem>
      </List>
    </Box>
  );
}

export default CubeDownload;
