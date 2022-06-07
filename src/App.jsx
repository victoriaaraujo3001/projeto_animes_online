import { NavBar } from "./components/NavBar";
import NavBarHome from "./components/NavBarHome";
import { Section } from "./components/Section";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FavoriteScreeen } from "./screens/Favorites";
import { AccountScreen } from "./screens/Account";

function App() {
  return (
    <Switch>
      <Route path="/favorites">
        <NavBar />
        <FavoriteScreeen />
      </Route>
      <Route path="/account">
        <NavBar />
        <AccountScreen />
      </Route>
      <Route path="/">
        <NavBarHome />
        <Section />
      </Route>
    </Switch>
  );
}

export default App;
