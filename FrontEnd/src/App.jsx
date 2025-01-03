import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </div>
    </Router>
  )


}
export default App