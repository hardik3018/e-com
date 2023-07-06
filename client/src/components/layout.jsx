
import { NavBar } from "./navBar";
import { Footer } from "./footer";

function Layout(props) {
  return (
    <div className="Layout">
      <NavBar />

      <main>
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
