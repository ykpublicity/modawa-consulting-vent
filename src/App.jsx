
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ZoboDrink from './components/pages/ZoboDrink';
import ContactUs from './components/pages/ContactUs';
import RecruitDrivers from './components/pages/RecruitDrivers';
import RecruitDomestic from './components/pages/RecruitDomestic';
import SalesCars from './components/pages/SalesCars';
import LandProperties from './components/pages/LandProperties';
import EducationalConsultant from './components/pages/EducationalConsultant';
import HeroSlider from './components/HeroSlider';
import ServiceStack from './components/ServiceStack';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
  }), [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<><HeroSlider /><ServiceStack /></>} />
          <Route path="/home" element={<><HeroSlider /><ServiceStack /></>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/zobo" element={<ZoboDrink />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/drivers" element={<RecruitDrivers />} />
          <Route path="/domestic" element={<RecruitDomestic />} />
          <Route path="/cars" element={<SalesCars />} />
          <Route path="/land" element={<LandProperties />} />
          <Route path="/education" element={<EducationalConsultant />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
