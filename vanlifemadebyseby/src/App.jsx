import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Auth from "./components/Auth";
import HostLayout from "./pages/Host/HostLayout";
// import Vans from "./pages/Vans";
// import Host from "./pages/Host";
// import VanDetail from "./pages/VanDetail";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          {/* <Route path="login" element={<About />} /> */}
        </Route>

        <Route element={<Auth />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element="" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
