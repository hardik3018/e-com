import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Proucts";
import { Orders } from "./pages/Orders";
import { Cart } from "./pages/Cart";
import { Account } from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Account" element={<Account />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
