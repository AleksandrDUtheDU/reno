import { ThemeProvider as ThemeProviderMi, StyledEngineProvider } from '@mui/material/styles';
import { HashRouter } from "react-router-dom";
import { themeMi } from '../theme/Theme';
import { GlobalStylesApp } from '../theme/GlobalStylesApp';
import Router from '../router';
// import GlobalStylesApp from './theme/GlobalStylesApp'

function App() {
  return (
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProviderMi theme={themeMi}>
          <GlobalStylesApp />
          <Router />
        </ThemeProviderMi>
      </StyledEngineProvider>
    </HashRouter>
  );
}

export default App;
