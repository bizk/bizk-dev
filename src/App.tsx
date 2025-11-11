import { useState } from 'react'
import './App.css'
import { WorkPanel } from './components/Work/Panel'
import { Menubar } from 'primereact/menubar'
import type { MenuItem } from 'primereact/menuitem'

type ViewType = 'about' | 'entrepreneurship' | 'projects' | 'blog'

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
    },
    { 
      label: 'Blog', 
      icon: 'pi pi-book',
      command: () => setActiveView('blog')
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
      case 'blog':
        return <p>Blog</p>
      default:
        return <WorkPanel />
    }
  }

  return (
    <main>
      <Menubar model={menuItems} className="custom-menubar" />
      {renderView()}
    </main >
  )
}

export default App
