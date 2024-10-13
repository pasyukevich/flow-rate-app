import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import FlowCube3D from './FlowCube3D';

function FlowRateCalculator() {
  const [walls, setWalls] = useState('');
  const [lineWidth, setLineWidth] = useState('');
  const [side1, setSide1] = useState('');
  const [side2, setSide2] = useState('');
  const [side3, setSide3] = useState('');
  const [side4, setSide4] = useState('');
  const [newFlowRate, setNewFlowRate] = useState(null);

  const calculateFlowRate = (e) => {
    e.preventDefault();
    if (!walls || !lineWidth || !side1 || !side2 || !side3 || !side4) {
      alert('Please fill in all fields');
      return;
    }

    // Calculate the average measured wall thickness
    const averageWallThickness = (parseFloat(side1) + parseFloat(side2) + parseFloat(side3) + parseFloat(side4)) / 4;

    // Calculate the new flow rate and round to nearest whole number
    const expectedWallThickness = parseFloat(lineWidth) * parseInt(walls);
    const newFlowRate = Math.round((expectedWallThickness / averageWallThickness) * 100);

    setNewFlowRate(newFlowRate);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#000000' }}>
        Flow Rate Calculator
      </Typography>
      <TextField
        label="Number of Walls"
        type="number"
        value={walls}
        onChange={(e) => setWalls(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Slicer Line Width (mm)"
        type="number"
        value={lineWidth}
        onChange={(e) => setLineWidth(e.target.value)}
        step="0.01"
        fullWidth
        margin="normal"
        variant="outlined"
        color="primary"
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 2 }}>
        Measured Wall Thickness:
      </Typography>

      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
        3D Flow Cube Representation
      </Typography>
      <FlowCube3D />
      <Typography variant="body2" sx={{ mt: 2, color: '#000000', textAlign: 'center' }}>
        Rotate the cube to see all numbered sides
      </Typography>

      {/* Square Layout for Sides */}
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <TextField
          label="Side 1"
          type="number"
          value={side1}
          onChange={(e) => setSide1(e.target.value)}
          step="0.01"
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiInputBase-input': { color: '#000000' },
            '& .MuiInputLabel-root': { color: '#000000' },
          }}
        />
        <TextField
          label="Side 2"
          type="number"
          value={side2}
          onChange={(e) => setSide2(e.target.value)}
          step="0.01"
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiInputBase-input': { color: '#000000' },
            '& .MuiInputLabel-root': { color: '#000000' },
          }}
        />
        <TextField
          label="Side 3"
          type="number"
          value={side3}
          onChange={(e) => setSide3(e.target.value)}
          step="0.01"
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiInputBase-input': { color: '#000000' },
            '& .MuiInputLabel-root': { color: '#000000' },
          }}
        />
        <TextField
          label="Side 4"
          type="number"
          value={side4}
          onChange={(e) => setSide4(e.target.value)}
          step="0.01"
          fullWidth
          margin="normal"
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiInputBase-input': { color: '#000000' },
            '& .MuiInputLabel-root': { color: '#000000' },
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateFlowRate}
        sx={{ mt: 2, color: '#000000' }}
      >
        Calculate Flow Rate
      </Button>
      {newFlowRate !== null && (
        <Typography variant="h6" sx={{ mt: 2, color: '#000000' }}>
          New Flow Rate: {newFlowRate} %
        </Typography>
      )}
      
      
    </Box>
  );
}

export default FlowRateCalculator;
