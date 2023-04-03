import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Home, Login } from '@/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
