import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
