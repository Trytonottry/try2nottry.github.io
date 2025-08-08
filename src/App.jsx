import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import GitHubStats from './components/GitHubStats';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <GitHubStats />
        <About />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 Trytonottry. Создано с ❤️ и кодом.
      </footer>
    </div>
  );
}

export default App;