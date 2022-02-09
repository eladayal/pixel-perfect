import { Switch, Route } from "react-router-dom";
import routes from './routes.js'
import { AppHeader } from "./cmps/AppHeader.jsx";
import { AppFooter } from "./cmps/AppFooter.jsx";

function App() {
  return (
    <>
      <AppHeader />
      <main className="main-app">
        <Switch>
          {routes.map(route => <Route key={route.path}  component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <AppFooter/>
    </>
  );
}

export default App;
