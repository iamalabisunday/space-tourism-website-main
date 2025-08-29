import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import PageNotFound from "./Pages/PageNotFound";
import Moon from "./component/Moon";
import Mars from "./component/Mars";
import Europa from "./component/Europa";
import Titan from "./component/Titan";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
