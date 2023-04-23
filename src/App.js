import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ < Dash /> } />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>uh oh.</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
