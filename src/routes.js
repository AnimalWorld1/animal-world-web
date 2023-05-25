import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import App from "./App";
import Page404 from "./pages/404";
import MainPage from "./pages/main";
import Footer from "./components/footer";
import EpisodesPage from "./pages/episodes";
import DropsPage from "./pages/DropsPage";
import MarketPage from "./pages/MarketPage";
import RoadmapPage from "./pages/roadmap";
import { ParallaxProvider } from "react-scroll-parallax";

export default function AppRoutes() {
  return (
    <App>
      <Router>
        <div className="relative-container">
          <Header />
          <ParallaxProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/episodes" element={<EpisodesPage />} />
              <Route path="/packs" element={<DropsPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </ParallaxProvider>
          <Footer />
        </div>
      </Router>
    </App>
  );
}
