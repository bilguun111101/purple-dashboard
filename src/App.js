import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardSection } from './components';
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import("./components/Navbar/Navbar").then(module => {
  return { default: module.Navbar }
}))

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<h2 style={{ color: '#FFF' }}>Loading ...</h2>}>
              <DashboardSection />
            </Suspense>
          } />
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
