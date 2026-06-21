import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import ComplianceHub from './pages/ComplianceHub';
import Contact from './pages/Contact';
import Partners from './pages/Partners';

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  let themeClass = ''; // Default: no theme class (uses root matte gold system)
  if (path === '/') {
    themeClass = 'theme-landing'; // Option 3 (Obsidian Navy Gold)
  } else if (path === '/partners') {
    themeClass = 'theme-partners'; // Option 8 (Arctic Blue Silver)
  } else if (
    path === '/services' || 
    path === '/products' || 
    path.startsWith('/products/') || 
    path === '/compliance'
  ) {
    themeClass = 'theme-products'; // Option 6 (Electric Cyan)
  }

  return (
    <div className={themeClass} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/compliance" element={<ComplianceHub />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
