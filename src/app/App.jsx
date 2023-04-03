import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Home, Login, Signup } from '@/pages';
import app from '@/@service/app';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
