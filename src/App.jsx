// App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <Header setPage={setPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
