import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import TodosPage from './pages/TodosPage';
import ProfilesPage from './pages/ProfilesPage';
function App() {
  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        <Navbar />
        <main style={{ maxWidth: 1024, margin: '20px auto', padding: '0 16px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

