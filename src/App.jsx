import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Blog from "./component/Pages/Blog";
import NotFound from "./component/Pages/NotFound";
import Layout from "./component/Layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;
