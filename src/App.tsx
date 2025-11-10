import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Divider } from 'primereact/divider'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" className="rounded-lg" />

      <h1>Carlos Santiago Yanzon</h1>
      <p>Informatics Engineer | Distributed Systems and blockchain Developer | Creative</p>

      <Divider align="center">
        <h3 className="text-2xl text-primary font-bold">Experience</h3>
      </Divider>

      <p>Carlos is a self driven professional and an Engineer with many years of experience in the industry working on complex porjects, at large scale companies and startups. He also has experience in entrepreneurship giving him the ability to communicate with different stakeholders. Carlos gets the job done and adapts to different circunstances with the tools and resources available (Some may say this is an Argentinian trait). He believes in Honest and direct communication, prefers dynamic work environments and is motivated by challenge.</p>

      <Card title="Blockchain and Backend Developer @ sFox" subTitle="2024 - Present">
        <Tag value="Go" rounded></Tag>
        <Tag value="NodeJs" rounded></Tag>
        <p>
          sFox is a crypto OTC exchange that processes millons of transactions daily. Due to my adaptability and deep blockchain knowledge, I have been working on different projects using different technologies, from putting together critical services to working on fullstack features.
        </p>
        <ul>
          <li>Created the UTXO wallet signing service on Go with HSM and PKCS#11 for Ledger devices. It handles over 10k daily transactions.</li>
          <li>Led the development of the travel rule compliance system and data exchange for US, Europe and Asia. Allowing the company to operate in these regions.</li>
          <li>Worked on integrating rosetta with the ETH wallet services and the exchange API.</li>
          <li>Worked on a Polkadot staking service. Mainly on a feature that scans and cooses the best validator to stake on.</li>
        </ul>
      </Card>

      <Card title="Blockchain Developer @ Zondax" subTitle="2023 - 2024">
        <Tag value="Go" rounded></Tag>
        <p>
          Zondax is a company that provides a wallet SDK for different blockchains. I was working on the development of the SDK for iOS and Android.
        </p>
        <ul>
          <li>
            Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps
          </li>
        </ul>
      </Card>

      <Card title="Sr. Member of Technical Staff @ Salesforce" subTitle="2020 - 2023">
        <Tag value="NodeJs" rounded></Tag>
        <p>
          Salesforce is a company that provides a CRM platform for businesses. I was working on the development of the Salesforce platform for businesses.
        </p>
        <ul>
          <li>
            Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps
          </li>
        </ul>
      </Card>

      <Card title="Jr. Software Engineer @ JPMorgan" subTitle="2019 - 2020">
        <Tag value="NodeJs" rounded></Tag>
        <p>
          Salesforce is a company that provides a CRM platform for businesses. I was working on the development of the Salesforce platform for businesses.
        </p>
        <ul>
          <li>
            Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps
          </li>
        </ul>
      </Card>


      <Divider align="center">
        <h3 className="text-2xl text-primary font-bold">Education</h3>
      </Divider>

      <Card title="Informatics Engineer @ UADE" subTitle="2017 - 2022">
        <p>
          Salesforce is a company that provides a CRM platform for businesses. I was working on the development of the Salesforce platform for businesses.
        </p>
        <ul>
          <li>
            Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps
          </li>
        </ul>
      </Card>


      <Divider align="center">
        <h3 className="text-2xl text-primary font-bold">Skills</h3>
      </Divider>

      <Divider align="center">
        <h3 className="text-2xl text-primary font-bold">Entrepreneurship</h3>
      </Divider>
    </>
  )
}

export default App
