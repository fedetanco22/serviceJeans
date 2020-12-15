import NavBar from "./components/NavBar/NavBar"; // SACARLO Y HACER MI NAVBAR
import Home from "./containers/Home/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import CategoriesContainer from "./containers/CategoriesContainer/CategoriesContainer";

import Cart from "./containers/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/useAppContext";

import "./App.scss";
import CategoriesDetailContainer from "./containers/CategoriesDetailContainer/CategoriesDetailContainer";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home greeting="Últimos ingresos de Service Jeans!" />
            </Route>
            {/* Item Detail */}
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            {/* Category Items */}
            <Route exact path="/categories/">
              <CategoriesContainer />
            </Route>
            <Route exact path="/categories/:categoryId">
              <CategoriesDetailContainer />
            </Route>
            {/* CheckOut */}
            <Route exact path="/cart/">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;

// props la forma de pasar valores d eun padre a un hijo!!!
// ({texto}) = destructuring
