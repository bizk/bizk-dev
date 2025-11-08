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

      <h2></h2>


      
      <h2>Work</h2>

      <p>Carlos is a self driven professional and an Engineer with many years of experience in the industry working on complex porjects, at large scale companies and startups. He also has experience in entrepreneurship giving him the ability to communicate with different stakeholders. Carlos gets the job done and adapts to different circunstances with the tools and resources available (Some may say this is an Argentinian trait). He believes in Honest and direct communication, prefers dynamic work environments and is motivated by challenge.</p>


      <h3>Blockchain and Backend Developer @ sFox</h3>
      <p>2024 - Present</p>
      <p>sFox is a crypto OTC exchange that processes millons of transactions daily. Due to my adaptability and deep blockchain knowledge, I have been working on different projects using different technologies, from putting together critical services to working on fullstack features.</p>
      <ul>
        <li>Created the UTXO wallet signing service on Go with HSM and PKCS#11 for Ledger devices. It handles over 10k daily transactions.</li>
        <li>Led the development of the travel rule compliance system and data exchange for US, Europe and Asia. Allowing the company to operate in these regions.</li>
        <li>Worked on integrating rosetta with the ETH wallet services and the exchange API.</li>
        <li>Worked on a Polkadot staking service. Mainly on a feature that scans and cooses the best validator to stake on.</li>
      </ul>

      <h3>Blockchain Developer @ Zondax</h3>
      <p>2024 - Present</p>
      <p></p>
      <ul>
        <li>Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps.</li>
        <li></li>
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
