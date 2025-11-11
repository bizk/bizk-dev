import { useState } from 'react'
import './App.css'
import { Divider } from 'primereact/divider'
import { Card } from 'primereact/card'
import { WorkPanel } from './components/Work/Panel'
import { Menubar } from 'primereact/menubar'
import type { MenuItem } from 'primereact/menuitem'

type ViewType = 'about' | 'entrepreneurship' | 'projects'

function App() {
  const [activeView, setActiveView] = useState<ViewType>('about')

  const menuItems: MenuItem[] = [
    { 
      label: 'About', 
      icon: 'pi pi-user',
      style: {
        color: 'var(--primary-color)'
      },
      command: () => setActiveView('about')
    },
    { 
      label: 'Entrepreneurship', 
      icon: 'pi pi-briefcase',
      command: () => setActiveView('entrepreneurship')
    },
    { 
      label: 'Projects', 
      icon: 'pi pi-folder',
      command: () => setActiveView('projects')
    }
  ]

  const renderView = () => {
    switch (activeView) {
      case 'about':
        return <WorkPanel />
      case 'entrepreneurship':
        return <p>Entrepreneurship</p>
      case 'projects':
        return <p>Skills</p>
      default:
        return <WorkPanel />
    }
  }

  return (
    <main>
      <Menubar model={menuItems} />
      {renderView()}
    </main >
  )
}

export default App
