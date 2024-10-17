import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container flex flex-col bg-neutral-800 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
