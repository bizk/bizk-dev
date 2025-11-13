import { Card } from "primereact/card";
import { WorkExperience } from "./WorkExperience"
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';


export const WorkPanel = () => {
  return (
    <div className="work-panel-container">
      <div className="profile-header">
        <img 
          src="/public/profile.jpg" 
          alt="Carlos Santiago Yanzon" 
          className="profile-image"
        />
        <h1 className="profile-name">Carlos Santiago Yanzon</h1>
        <p className="profile-title">Informatics Engineer | Distributed Systems and Blockchain Developer | Creative</p>
        <p className="profile-description">
          Carlos is a self-driven professional and an Engineer with many years of experience in the industry working on complex projects at large scale companies and startups. He also has experience in entrepreneurship, giving him the ability to communicate with different stakeholders. Carlos gets the job done and adapts to different circumstances with the tools and resources available (Some may say this is an Argentinian trait). He believes in honest and direct communication, prefers dynamic work environments and is motivated by challenge.
        </p>
      </div>

      <Divider />

        <WorkExperience 
          title="Blockchain Engineer | Product - Wallet @ sFox" 
          date="February 2024 - Present" 
          technologies={["Go", "Node.js", "TypeScript", "Bitcoin", "Polkadot", "Cosmos SDK", "HSM", "PKCS#11"]} 
          description="sFox is a crypto OTC exchange that processes millions of transactions daily. Working on critical wallet infrastructure and compliance systems." 
          points={[
            "Integrated backend wallet services with Coinbase TRUST network for compliant KYC data exchange (Node.js, TypeScript)",
            "Designed and implemented a Bitcoin transaction signing system with HSM and PKCS#11 in Go. It processes over 500 wallet transactions a day",
            "Worked on Polkadot staking services and internal crypto backend components",
            "Served as a key link between engineering and compliance teams. Delivered cross-team projects independently with minimal supervision",
            "Currently architecting a cosmos-sdk based solution for internal KYC and Identity verification, focused on zero knowledge proofs",
            "Created the UTXO wallet signing service on Go with HSM and PKCS#11 for Ledger devices. It handles over 10k daily transactions.", 
            "Led the development of the travel rule compliance system and data exchange for US, Europe and Asia. Allowing the company to operate in these regions.", 
            "Worked on integrating rosetta with the ETH wallet services and the exchange API.", 
            "Worked on a Polkadot staking service. Mainly on a feature that scans and cooses the best validator to stake on."
          ]} 
        />

        <Divider />

        <WorkExperience 
          title="Founder @ Austral Tech" 
          date="January 2024 - Present" 
          technologies={["Go", "Node.js", "Python", "PostgreSQL", "Linux", "LLMs", "Redis", "MCP", "WhatsApp API"]} 
          description="Founded and leading a tech consulting firm specialized in AI-driven automation, document analysis, and chat-based customer service. Stack: Go, Node.js, Python, PostgreSQL, Linux. Currently managing a team of 2 engineers." 
          points={[
            "Developing ventify.io a chatbot service that automates business sales processes. Currently serving 7 businesses and over 5000 clients weekly",
            "Built and deployed a WhatsApp LLM chatbot for a major energy company serving over 60,000 customers monthly—enabling self-service for payments, claims, and inquiries that connects to the company internal software (NodeJs, Redis, MCP, LLMs)",
            "Developed a document OCR + CRM integration for a law firm, reducing 200+ manual hours per month",
            "Automated cereal loading workflows in an export company, decreasing operational errors and time costs by 15%"
          ]} 
        />

        <Divider />

        <WorkExperience 
          title="Lecturer @ UADE" 
          date="June 2024 - Present" 
          technologies={["Java", "Spring", "React", "TypeScript", "Docker", "PostgreSQL", "Postman", "cURL"]} 
          description="Instructor for API development, focusing on practical, industry-ready skills. Co-created curriculum covering Java (Spring), React, Docker, PostgreSQL, Postman, and cURL." 
          points={[
            "Led project-based learning experiences to help students build professional-grade fullstack applications suitable for entry-level roles"
          ]} 
        />

        <Divider />

        <WorkExperience 
          title="Software Engineer | Data - Blockchain - Research and Development @ Zondax" 
          date="February 2023 - February 2024" 
          technologies={["Go", "Node.js", "Kubernetes", "Earthly", "ArgoCD", "Zcash", "Cosmos", "Rosetta"]} 
          description="Zondax is a company that provides wallet SDKs for different blockchains. Worked on blockchain development, cryptography, and infrastructure." 
          points={[
            "Main developer of cosmos blockchain, worked on Golang implementing cryptography and security features ensuring the use of the latest standards like Schnorr signatures and AEAD encryption",
            "Worked with blockchain data indexers and Coinbase Rosetta implementation",
            "Responsible for maintaining infrastructure of some blockchain nodes from Zcash and Cosmos on Kubernetes, Earthly and ArgoCD"
          ]} 
        />  

        <Divider />

        <WorkExperience 
          title="Sr. Software Engineer (AMTS → MTS → SMTS) | Research and Development @ Salesforce" 
          date="May 2020 - February 2023" 
          technologies={["Java", "Spring", "Node.js", "TypeScript", "Go", "Kubernetes", "Jenkins", "Tableau", "Chaos Engineering"]} 
          description="Salesforce is a leading CRM platform. Worked on research and development projects, leading technical initiatives and mentoring team members." 
          points={[
            "Technical lead on data analytics project. Responsible for a Java Spring data transformation microservice and Jenkins pipeline that processes information from more than 2,000 projects. Defined a Tableau dashboard structure by engaging with key stakeholders (VPs, Managers, etc)",
            "Led the design and development of a NodeJs and TypeScript microservice technology [US20230168871A1] that generates API specifications and tests out of live traffic on a Kubernetes cluster. Generated over 15,000 tests over 7 microservices without human intervention, reducing engineers time spent per test by 91%",
            "Managed and mentored 2 coworkers, 6 interns with their respective technical projects and participating as a speaker on company wide technical talks",
            "Led the development and research of a golang Chaos Engineering framework and CLI that allows to perform tests, assertions and alerts regardless of the tooling/libraries used for each step",
            "Developed 3 TypeScript libraries for Reporting, alerting and kubernetes management, being consumed by 27 projects"
          ]} 
        />

        <Divider />

        <WorkExperience 
          title="Software Engineering Intern @ JPMorgan Chase" 
          date="June 2019 - May 2020" 
          technologies={["Java", "Microservices", "Payment Processing"]} 
          description="JPMorgan Chase is a leading global financial services firm. Worked on enhancing and modernizing key messaging microservices." 
          points={[
            "Worked on enhancing and modernizing key messaging micro services widely used across LATAM by banks and other institutions",
            "Participated actively in the development of a Java payment processing system"
          ]} 
        />

      <Divider align="center">
        <h2 className="section-title">Education</h2>
      </Divider>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Meng. Informatics Engineering @ Universidad Argentina De la Empresa (UADE)</h3>
          <Tag value="2017 - 2022" severity="success" className="card-date" />
        </div>
        <p className="card-description">
          Bachelor's degree in Informatics Engineering with a thesis focused on distributed systems and blockchain technology.
        </p>
        <ul className="card-list">
          <li className="card-list-item">
            <strong>Thesis:</strong> Distributed systems and blockchain
          </li>
          <li className="card-list-item">
            <strong>Location:</strong> Buenos Aires, Argentina
          </li>
        </ul>
      </Card>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">CCNA 1 & 2 - CISCO & UADE</h3>
          <Tag value="2019 - 2020" severity="success" className="card-date" />
        </div>
        <p className="card-description">
          Cisco Certified Network Associate courses with Letter of Merit recognition.
        </p>
        <ul className="card-list">
          <li className="card-list-item">
            <strong>CCNA R&S: Introduction to Networks - Letter of Merit</strong> (Issued Feb 2020) - Credential ID: AR-UADE-CCNA2-192C-JN.L702
          </li>
          <li className="card-list-item">
            <strong>CCNA R&S: Introduction to Networks - Letter of Merit</strong> (Issued Dec 2019) - Credential ID: AR-UADE-CCNA1-192-LN.L702
          </li>
        </ul>
      </Card>

      <Divider align="center">
        <h2 className="section-title">Awards & Recognition</h2>
      </Divider>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Salesforce Innovation Award - Best Patent</h3>
          <Tag value="August 2022" severity="warning" className="card-date" />
        </div>
        <p className="card-description">
          The innovation challenge awards best innovations across the company. Awarded for patent that consists of a novel way to test distributed systems.
        </p>
      </Card>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Mulesoft Team Innovation Award - 2020</h3>
          <Tag value="December 2020" severity="warning" className="card-date" />
        </div>
        <p className="card-description">
          This award was received for participating and leading the first philanthropy technology focused project on Mulesoft history. With more than 250 hours of work, this project focused on connecting teachers, parents and students.
        </p>
      </Card>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Salesforce - Biggest Employee Impact</h3>
          <Tag value="2020" severity="warning" className="card-date" />
        </div>
        <p className="card-description">
          Team selected as a winner on the hackathon, which focused on improving user experience and engagement through a set of technologies.
        </p>
      </Card>

      <Divider align="center">
        <h2 className="section-title">Patents</h2>
      </Divider>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Systems, methods, and devices for automatic application programming interface model generation based on network traffic</h3>
          <Tag value="US20230168871A1 - Issued June 1, 2023" severity="info" className="card-date" />
        </div>
        <p className="card-description">
          Systems, methods, and devices facilitate generation of application programming interfaces. Systems include a computing platform implemented using a server system, the computing platform being configurable to cause monitoring application programming interface (API) traffic associated with a client service, storing a representation of the API traffic in a database system, the representation including at least an API call identifier and metadata, and generating one or more API models based, at least in part, on the representation of the API traffic.
        </p>
      </Card>

      <Card className="info-card">
        <div className="card-header">
          <h3 className="card-title">Testing integration applications for systems</h3>
          <Tag value="US20240104003A1 - Filed September 27, 2022" severity="info" className="card-date" />
        </div>
        <p className="card-description">
          An integration application comprising a plurality of components may be provided. The components may provide connections between systems. The integration application may be configured to allow the systems to exchange data. It may be determined that a new version of a first one of the components is a candidate for release. Prior to release of the new version of the first component, the integration application may be tested using the new version of the first component and an existing version of the first component.
        </p>
      </Card>

      <Divider align="center">
        <h2 className="section-title">Skills</h2>
      </Divider>

    </div>
  )
}