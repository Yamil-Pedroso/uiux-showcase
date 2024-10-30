// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import DesignAgency from "./pages/DesignAgency";
import { theme } from "./styles/theme"; 

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<DesignAgency />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
