import '../node_modules/bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
         
         
        </Routes>
      </Router>
    </div>
  )
}

export default App