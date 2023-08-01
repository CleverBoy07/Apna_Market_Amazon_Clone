import './App.css';
import Headermark from './Headermark';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Check } from '@mui/icons-material';
function App() {
  return (
    <Router>

      <div className="App">
      <Headermark/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element = {<Checkout/>}/>
          
        </Routes>
      </div>

    </Router>
  );
}

export default App;
