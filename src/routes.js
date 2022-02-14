import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/header";
import StakingPage from "./pages/staking";
import App from './App'
import Page404 from "./pages/404";
import MainPage from "./pages/main";
import Footer from "./components/footer";
import PacksPage from "./pages/packs";
import EpisodesPage from "./pages/episodes";
import RoadmapPage from "./pages/roadmap";
import {ParallaxProvider} from "react-scroll-parallax";

export default function AppRoutes() {
    return (
        <App>
            <Router>
                <Header/>
                <ParallaxProvider>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/staking" element={<StakingPage/>}/>
                        <Route path="/episodes" element={<EpisodesPage/>}/>
                        <Route path="/packs" element={<PacksPage/>}/>
                        <Route path="/roadmap" element={<RoadmapPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </ParallaxProvider>
                <Footer/>
            </Router>
        </App>
    );
}
