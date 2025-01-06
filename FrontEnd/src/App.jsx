import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'
import Register from './Components/Register/Register';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Security/Register' exact Component={Register} />
        </Routes>
      </div>
    </Router>
  )


}
export default App