import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Freebook from './components/Freebook';


const componentStyles = String.raw`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

:root {
font-family: 'Poppins', sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #171a39;
  background: #f0f3f7;
  font-weight: 400;
  scroll-behavior: smooth;
}

* {
box-sizing: border-box;
}

body {
min-width: 360px;
  min-height: 100vh;
  margin: 0;
  background: #f0f3f7;
  color: #171a39;
}

button,
input {
font: inherit;
}

button,
a {
-webkit-tap-highlight-color: transparent;
}

.site-shell {
width: 100%;
  min-height: 100vh;
  margin: 0;
  overflow: clip;
  background: #fff;
  --ink: #171a39;
  --muted: #596080;
  --pink: #ec1682;
  --pink-dark: #d90070;
  --border: #eee8f5;
  --glass: rgb(255 255 255 / 79%);
}

.site-shell[data-theme='dark'] {
--ink: #f9f4ff;
  --muted: #d0c7dd;
  --border: #3a334d;
  --glass: rgb(35 31 52 / 88%);
  border-color: #373044;
  background: #1d1a2c;
}

@media (max-width: 600px) {
body {
min-width: 320px;
}

.site-shell {
width: 100%;
    min-height: 100vh;
    margin: 0;
}
}

@media (prefers-reduced-motion: reduce) {
*,
  *::before,
  *::after {
scroll-behavior: auto !important;
    transition-duration: .01ms !important;
}
}`;

const App = () => {
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('bookstore-theme') === 'dark' ? 'dark' : 'light'
  ));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bookstore-theme', theme);
  }, [theme]);

  return (
    <>
      <style>{componentStyles}</style>
      <div data-theme={theme} className="site-shell">
        <Navbar theme={theme} onThemeChange={setTheme} />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
}

export default App;
