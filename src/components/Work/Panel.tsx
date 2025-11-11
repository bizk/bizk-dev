import { Card } from "primereact/card";
import { WorkExperience } from "./WorkExperience"
import { Divider } from 'primereact/divider';


export const WorkPanel = () => {
  return (
    <>
       <img 
         src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" 
         alt="Image" 
         width="250" 
         height="250" 
         style={{ 
           borderRadius: '50%', 
           objectFit: 'cover',
           display: 'block',
           margin: '0 auto'
         }} 
       />

        <h1>Carlos Santiago Yanzon</h1>
        <p>Informatics Engineer | Distributed Systems and blockchain Developer | Creative</p>

        <p>Carlos is a self driven professional and an Engineer with many years of experience in the industry working on complex porjects, at large scale companies and startups. He also has experience in entrepreneurship giving him the ability to communicate with different stakeholders. Carlos gets the job done and adapts to different circunstances with the tools and resources available (Some may say this is an Argentinian trait). He believes in Honest and direct communication, prefers dynamic work environments and is motivated by challenge.</p>

        <Divider />

        <WorkExperience title="Blockchain and Backend Developer @ sFox" date="2024 - Present" technologies={["Go", "NodeJs"]} description="sFox is a crypto OTC exchange that processes millons of transactions daily. Due to my adaptability and deep blockchain knowledge, I have been working on different projects using different technologies, from putting together critical services to working on fullstack features." points={["Created the UTXO wallet signing service on Go with HSM and PKCS#11 for Ledger devices. It handles over 10k daily transactions.", "Led the development of the travel rule compliance system and data exchange for US, Europe and Asia. Allowing the company to operate in these regions.", "Worked on integrating rosetta with the ETH wallet services and the exchange API.", "Worked on a Polkadot staking service. Mainly on a feature that scans and cooses the best validator to stake on."]} />

        <Divider />

        <WorkExperience title="University Teacher @ UADE" date="2024 - 2025" technologies={["Java", "React", "Typescript"]} description="I was a teacher for the APIs course at UADE. The subject is focused on teaching the fundamentals of full stack development and distributed systems." points={[]} />

        <Divider />

        <WorkExperience title="Blockchain Developer @ Zondax" date="2023 - 2024" technologies={["Go", "NodeJs"]} description="Zondax is a company that provides a wallet SDK for different blockchains. I was working on the development of the SDK for iOS and Android." points={["Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps"]} />  

        <Divider />

        <WorkExperience title="Sr. Member of Technical Staff @ Salesforce" date="2020 - 2023" technologies={["NodeJs"]} description="Salesforce is a company that provides a CRM platform for businesses. I was working on the development of the Salesforce platform for businesses." points={["Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps"]} />

        <Divider />

        <WorkExperience title="Jr. Software Engineer @ JPMorgan" date="2019 - 2020" technologies={["NodeJs"]} description="JPMorgan is a company that provides a banking platform for businesses. I was working on the development of the JPMorgan platform for businesses." points={["Worked on the development of the Zondax Wallet SDK for iOS and Android. It is a library that allows developers to integrate Zondax's wallet services into their apps"]} />


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