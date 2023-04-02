import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CastlesPage from './pages/CastlesPage';
import TinyHomesPage from './pages/TinyHomesPage';
import PrivacyPage from './pages/PrivacyPage';
import ListingDetailsPage from './pages/ListingDetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/castles" element={<CastlesPage />} />
        <Route path="/tinyhomes" element={<TinyHomesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/listing/:id" element={<ListingDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
