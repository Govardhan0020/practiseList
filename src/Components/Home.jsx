// import React from 'react'

// const Home = () => {
//   return (
//   <div>
//     <h1> Home page </h1>
//   </div>

//   )
// }

// export default Home; 







import { Link } from "react-router-dom";
import "../App.css";
import { useTheme } from "../context/Themecontext";

const Home = () => {
  const { theme, toggleTheme } = useTheme()


  return (
    <div className="container `app ${theme}` ">

      {/* LEFT SIDE */}
      <div className="left">
        <h1>Hi, I'm Govardhan 👋</h1>
        <p>
          Frontend Developer specializing in React.js. I build clean,
          modern and user-friendly web applications.
        </p>

        <div className="buttons">
          <button>View Work</button>
          <button className="outline">Contact Me</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
 <div className="right">

        {/* NAVBAR (TOP) */}
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div>   <button onClick={toggleTheme}>
        Toggle Theme
      </button>  </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="profile"
          />

          {/* TEXT ON IMAGE */}
          <div className="overlay-text">
            <h2>Creative Developer</h2>
            <p>Building modern UI experiences</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;