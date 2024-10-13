import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CubeDownload from './components/CubeDownload';
import FlowRateCalculator from './components/FlowRateCalculator';

// Create a theme instance with cyan as the primary color and black text
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Cyan 500
    },
    secondary: {
      main: '#006064', // Cyan 900
    },
    text: {
      primary: '#000000', // Black
    },
  },
  typography: {
    allVariants: {
      color: '#000000', // Ensure all typography variants use black
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000000' }}>
              3D Printing Tools
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <CubeDownload />
            <Box sx={{ my: 4 }} />
            <FlowRateCalculator />
          </Box>
        </Container>
        
        <Box component="footer" sx={{ bgcolor: 'primary.light', py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center" sx={{ color: '#000000' }}>
              © {new Date().getFullYear()} 3D Printing Tools
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
