import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import dataProducts from "./data/product.json";

function App() {
  const [countCart, setCountCart] = useState(0);

  const handleAddToCart = () => {
    setCountCart(countCart + 1);
  };

  return (
    <>
      <Navbar countCart={countCart} />
      <Router>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Switch>
            <Route path="/">
              <Home
                dataProducts={dataProducts}
                handleAddToCart={handleAddToCart}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
