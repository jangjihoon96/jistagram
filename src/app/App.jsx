import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { First, Home, Login, Signup } from '@/pages';
import app from '@/@service/app';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
