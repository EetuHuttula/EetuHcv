import './App.css';
import AppNavbar from "./components/navbar/Navbar.jsx"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<AppNavbar />} />
    </Routes>
    </>
  );
}

export default App;
