import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

const getData = async() => {

  const res = await   fetch("http://skplfv-5000.csb.app")
;
  const data = await res.json();
  console.log(data, "data")

}

useEffect(() => {
  fetch("http://skplfv-5000.csb.app/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error:", error));
}, []);


useEffect(()  => {

getData();

  // fetch("https://skplfv-5000.csb.app")
  // .then((res) => res.json())
  // .then((data) => console.log(data))
}, [])

// useEffect(() => {
//   axios.get("https://skplfv-5000.csb.app")
//     .then(response => console.log(response.data))
//     .catch(error => console.error("API error:", error));
// }, []);


  return (
 <>
 <h1> hello All </h1>
 </>
  )
}

export default App
