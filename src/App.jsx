import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import PageNotFound from "./Pages/PageNotFound";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
