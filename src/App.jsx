import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (payload) => {
    setUser(payload);
    const el = document.getElementById('dashboard');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLogout = () => {
    setUser(null);
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToLogin = () => {
    const el = document.getElementById('login');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar isAuthed={!!user} onLogout={handleLogout} onScrollToLogin={handleScrollToLogin} />
      <main>
        <Hero />
        {!user && <Login onSuccess={handleLoginSuccess} />}
        <Dashboard user={user} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
