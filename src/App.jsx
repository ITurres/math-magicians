import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/math-magicians/" element={<Home />} />
      <Route path="/math-magicians/calculator" element={<Calculator />} />
      <Route path="/math-magicians/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
