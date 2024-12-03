import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* Contenedor principal */}
        <main className="flex-grow-1"> {/* Contenedor para el contenido principal */}
          <Routes>
            <Route path="/" element={<BlogPosts />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route 
              path="/admin" 
              element={<PrivateRoute><CreatePost user={user} /></PrivateRoute>} 
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </main>
        <Footer /> {/* Footer agregado */}
      </div>
    </Router>
  );
}

export default App;


