import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./index.css";

// Lazy loading pages
const Home = React.lazy(() => import("./Pages/Home"));
const Destination = React.lazy(() => import("./Pages/Destination"));
const Crew = React.lazy(() => import("./Pages/Crew"));
const Technology = React.lazy(() => import("./Pages/Technology"));
const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));

// Lazy loading destination components
const Moon = React.lazy(() => import("./component/Moon"));
const Mars = React.lazy(() => import("./component/Mars"));
const Europa = React.lazy(() => import("./component/Europa"));
const Titan = React.lazy(() => import("./component/Titan"));
// lazy load crew components
const Commander = React.lazy(() => import("./component/Commander"));
const Mission = React.lazy(() => import("./component/Mission"));
const Pilot = React.lazy(() => import("./component/Pilot"));
const Engineer = React.lazy(() => import("./component/Engineer"));
// lazy load technology components
const Launch = React.lazy(() => import("./component/Launch"));
const Spaceport = React.lazy(() => import("./component/Spaceport"));
const SpaceCapsule = React.lazy(() => import("./component/SpaceCapsule"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* Destination Route */}
          <Route path="/destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          {/* Crew Route */}
          <Route path="/crew" element={<Crew />}>
            <Route index element={<Commander />} />
            <Route path="commander" element={<Commander />} />
            <Route path="mission" element={<Mission />} />
            <Route path="pilot" element={<Pilot />} />
            <Route path="engineer" element={<Engineer />} />
          </Route>
          {/* Technology Route */}
          <Route path="/technology" element={<Technology />}>
            <Route index element={<Launch />} />
            <Route path="launch" element={<Launch />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="spaceCapsule" element={<SpaceCapsule />} />
          </Route>
          {/* 404 Page Not Found Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
