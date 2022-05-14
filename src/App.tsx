import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashbord';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CreateCleanTask from './CreateCleanTask';


function App() {
  return (
         <Router>
           <div>
             {/* <nav>
              {/* <ul>
                <li>
                   <Link to="">Dashboard</Link>
                 </li>
                <li>
                   <Link to="/products">Cleaning Tasks</Link>
               </li>
               </ul> */}
             {/* </nav> */} 
             <Routes>
              <Route  path='/' element={<Dashboard/>} />
              <Route  path='/cleaning' element={<CreateCleanTask/>}/>
             </Routes>
           </div>
       </Router>
   );
}

export default App;