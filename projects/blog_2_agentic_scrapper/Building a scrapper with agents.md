# Building a scrapper with agents

So i wanted to build some scrappers for a while. I decided that I wanted one for searching for suppliers in different pages. 

I have been reading for a while about sub agents and "Agentic development". I tried it in the past and i saw how these things consumed all the credits with little to no benefits compared to sequential workflow.

So I decided to start over again.

## Week 1

I wanted to create a base that i can reuse in the future if this seems to work fine. So I created a .agent folder where i would work alongside the agents:

- **context** Contains the general information for architecture, changes, code conventions and the project. This is the whole stuff that agent would use

- **work** Here is where I define the tasks and plans that agents will implement, my idea is that i define the tasks here and the agents can go on and implement in the meantime
  
  - **Tasks**: Here we define the features we want to implement trough the session
  
  - **Plans**: Agent implementation plan
  
  - **Hands-off:** Pending work that agents leave after finishing some task

- **subagents** : Here is where I defined the base promtps for sub agents, these are self explanatory
  
  - Implementer
  
  - planner
  
  - researcher
  
  - reviewer
  
  - tester-qa

It built the whole base API-UI and db+redis docker compose in one shot after half an hour, it also drained my cursor agent pro subscription. I had to switch to **opencode** to finish up the docker compose so i can start testing.


