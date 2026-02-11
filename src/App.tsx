import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Placeholder from './pages/Placeholder';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </div>
  );
};

export default App;
