import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import MainLayout from './layout/Mainlayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout />
            }
          >
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
