
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PagePrincipal from './components/PagePrincipal';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<PagePrincipal />} />
        <Route path="/" element={<Navigate to='/home' />} />
      </Routes>
    </Router>
  )
}
export default App
