
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import WhatWeDoPage from './pages/WhatWeDoPage.tsx';
import ApproachPage from './pages/ApproachPage.tsx';
import ExperiencePage from './pages/ExperiencePage.tsx';
import InsightsPage from './pages/InsightsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
