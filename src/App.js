import "./index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Contact from "./Contact/Contact";
import Basket from "./Basket/Basket";
import Footer from "./Footer/Footer";
import SingleProduct from "./SingleProduct/SingleProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/catalogue/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
