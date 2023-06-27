import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'> 
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
    </main>
    
    </>
  )
}

export default App;
