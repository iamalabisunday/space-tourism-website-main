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

// Lazy loading crew components
const Commander = React.lazy(() => import("./component/Commander"));
const Mission = React.lazy(() => import("./component/Mission"));
const Pilot = React.lazy(() => import("./component/Pilot"));
const Engineer = React.lazy(() => import("./component/Engineer"));

// Lazy loading technology components
const Launch = React.lazy(() => import("./component/Launch"));
const Spaceport = React.lazy(() => import("./component/Spaceport"));
const SpaceCapsule = React.lazy(() => import("./component/SpaceCapsule"));

/* ---------------- Layout Wrapper ---------------- */
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>{children}</main>
    </div>
  );
}

/* ---------------- Loaders ---------------- */
function FullPageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
    </div>
  );
}

function SmallLoader() {
  return (
    <p className="text-center text-gray-300 mt-6 animate-pulse">
      Loading section...
    </p>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <Suspense fallback={<FullPageLoader />}>
                <Home />
              </Suspense>
            }
          />

          {/* Destination Route */}
          <Route
            path="/destination"
            element={
              <Suspense fallback={<FullPageLoader />}>
                <Destination />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Moon />
                </Suspense>
              }
            />
            <Route
              path="moon"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Moon />
                </Suspense>
              }
            />
            <Route
              path="mars"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Mars />
                </Suspense>
              }
            />
            <Route
              path="europa"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Europa />
                </Suspense>
              }
            />
            <Route
              path="titan"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Titan />
                </Suspense>
              }
            />
          </Route>

          {/* Crew Route */}
          <Route
            path="/crew"
            element={
              <Suspense fallback={<FullPageLoader />}>
                <Crew />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Commander />
                </Suspense>
              }
            />
            <Route
              path="commander"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Commander />
                </Suspense>
              }
            />
            <Route
              path="mission"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Mission />
                </Suspense>
              }
            />
            <Route
              path="pilot"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Pilot />
                </Suspense>
              }
            />
            <Route
              path="engineer"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Engineer />
                </Suspense>
              }
            />
          </Route>

          {/* Technology Route */}
          <Route
            path="/technology"
            element={
              <Suspense fallback={<FullPageLoader />}>
                <Technology />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Launch />
                </Suspense>
              }
            />
            <Route
              path="launch"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Launch />
                </Suspense>
              }
            />
            <Route
              path="spaceport"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <Spaceport />
                </Suspense>
              }
            />
            <Route
              path="spaceCapsule"
              element={
                <Suspense fallback={<SmallLoader />}>
                  <SpaceCapsule />
                </Suspense>
              }
            />
          </Route>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <Suspense fallback={<FullPageLoader />}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
