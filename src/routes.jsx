import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import NavBarHome from "./components/NavBarHome";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FavoritesScreen } from "./screens/Favorites";
import { AccountScreen } from "./screens/Account";
import { SinopseScreen } from "./screens/Sinopse";
import { Category } from "./components/Category";

export function Routes() {
  return (
    <Switch>
      <Route path="/categories">
        <NavBar />
        <Category />
      </Route>
      <Route path="/infoAnime/:id">
        <NavBar />
        <SinopseScreen />
      </Route>
      <Route path="/favorites">
        <NavBar />
        <FavoritesScreen />
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
