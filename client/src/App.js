import "./App.css";
import { NavBar } from "./components/navBar";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Home />
    </div>
  );
}

export default App;
