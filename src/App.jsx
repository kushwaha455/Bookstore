import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Freebook from './components/Freebook';


const App = () => {
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('bookstore-theme') === 'dark' ? 'dark' : 'light'
  ));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bookstore-theme', theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <Navbar theme={theme} onThemeChange={setTheme} />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}

export default App;
