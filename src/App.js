import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
