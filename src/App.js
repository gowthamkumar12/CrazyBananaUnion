import Landing from "./Landing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Minting from "./components/pages/Minting";
import { light } from "./styles/Themes";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/mint" exact>
              <Minting />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
