import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { useState } from 'react';

export default function App() {

const [currentPage, handlePageChange] = useState('About Me');

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'About Me':
      return <About />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Contact':
      return <Contact />;
    default:
      return <About />
  }
};

return (
  <>
    <Header/>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>{renderPage(currentPage)}</div>
  </>
  )
}

