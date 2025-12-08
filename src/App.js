import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import MainLayout from './layout/Mainlayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import GamesPage from './pages/GamesPage';
import TrailerPage from './pages/TrailerPage';
import SignIn from './pages/auth/SignIn';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
            <Route path='/games' element={<GamesPage />} />
            <Route path='/trailer' element={<TrailerPage />} />
            <Route path='/signin' element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
