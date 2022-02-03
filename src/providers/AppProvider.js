import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from '../assets/styles/global';
import { theme } from '../assets/styles/theme';

const AppProvider = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProvider;
