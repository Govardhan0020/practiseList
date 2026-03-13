import React from 'react'
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/cpmtact/Contact'
import "./App.css"


const App = () => {
  return (
    <div>

<HashRouter>
<div  className='navbar'>
   
   <Link to="/">  Home   </Link>
   <Link to="/about">  About    </Link>
   <Link to="/contact">  Contact    </Link>

</div>



  <Routes>
<Route index path="/" element={ <Home/>  }  />
<Route exact  path="/about" element={ <About/>  }  />
<Route exact path="/contact" element={ <Contact />  }  />

  </Routes>

</HashRouter>


    </div>
  )
}

export default App
