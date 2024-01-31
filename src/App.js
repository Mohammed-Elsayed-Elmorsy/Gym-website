import './App.css';
import { Hero, Plans, Programs, WhyUs, Testmonials, Footer, Email } from './components/Index'
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testmonials />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
