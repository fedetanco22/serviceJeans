import NavBar from "./components/NavBar/NavBar"; // SACARLO Y HACER MI NAVBAR
import Home from "./containers/Home/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./containers/CheckOut/CheckOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home greeting="My React App for Service Jeans!" />
        </Route>
        {/* Item Detail */}
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        {/* CheckOut */}
        <Route exact path="/cart">
          <Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// props la forma de pasar valores d eun padre a un hijo!!!
// ({texto}) = destructuring
