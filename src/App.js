import { Outlet } from "react-router-dom";
import { Footer, NavBar, Loader } from "./components";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/*<Loader />*/}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
