import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as ThemeProviderMi, StyledEngineProvider } from '@mui/material/styles';
import { HashRouter } from "react-router-dom";
import { themeMi } from './app/theme/Theme'
import App from './app/App';
import GlobalStylesApp from './app/theme/GlobalStylesApp';


//React.StrictMode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProviderMi theme={themeMi}>
          <GlobalStylesApp />
          <App />
        </ThemeProviderMi>
      </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>
);

