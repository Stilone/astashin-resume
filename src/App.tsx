import { Header } from './components/main/header'
import { Pictures } from './components/pictures/pictures'
import { TechList } from './components/tech-list/techList'
import './styles/App.scss'

function App() {

  return (
    <div className='app'>
      <div className='main'>
      <Header />
      <Pictures />
      </div>
      <TechList />
    </div>
  )
}

export default App
