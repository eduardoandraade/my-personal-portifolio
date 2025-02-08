import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'> 
      <Home />      
      <Work />
      <Services />
      <Skills />
      
      <Contact />
      
    </main>

    
    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;