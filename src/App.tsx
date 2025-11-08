import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Carlos Santiago Yanzon</h1>
      <p>Informatics Engineer | Distributed Systems and blockchain Developer | Creative</p>

      <h2>About me</h2>


      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>Distributed Systems Developer</h3>
          <p>2020 - 2021</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>
          <h3>Informatics Engineer</h3>
          <p>2020 - 2021</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>
          <h3>Skills</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ul>

      <h2>Entrepreneurship</h2>
      <ul>
        <li>
          <h3>Entrepreneurship</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ul>

      <h2>Contact</h2>
      <ul>
        <li>
          <h3>Contact</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ul>
    </>
  )
}

export default App
