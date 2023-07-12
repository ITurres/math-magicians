import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
