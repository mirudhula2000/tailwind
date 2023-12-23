import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <main className='min-h-screen bg-green-400'>
      <Header/>
      <Hero/>
      <br/>
      <hr className='p-3' />
      <Features/>
      <Footer/>
    
    </main>
  );
}

export default App;
