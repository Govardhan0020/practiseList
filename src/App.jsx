// import React from 'react'
// import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/cpmtact/Contact'
// import "./App.css"


// const App = () => {
//   return (
//     <div>

// <HashRouter>
// <div  className='navbar'>
   
//    <Link to="/">  Home   </Link>
//    <Link to="/about">  About    </Link>
//    <Link to="/contact">  Contact    </Link>

// </div>



//   <Routes>
// <Route index path="/" element={ <Home/>  }  />
// <Route exact  path="/about" element={ <About/>  }  />
// <Route exact path="/contact" element={ <Contact />  }  />

//   </Routes>

// </HashRouter>


//     </div>
//   )
// }

// export default App





import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="text-center mt-10">About Page</h1>} />
        <Route path="/contact" element={<h1 className="text-center mt-10">Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;