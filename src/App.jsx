import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from "./pages/Services";
import Residential from "./pages/Residential";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<Residential />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;