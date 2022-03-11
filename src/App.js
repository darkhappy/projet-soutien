import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";

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
