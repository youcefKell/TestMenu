import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBars } from '@fortawesome/free-solid-svg-icons'
import Title from './components/Title'
import Show from './components/show'
import Menu from './components/Menu'
const App = () => {
  return (
    <main>
      <Title/>
      <Show/>
      <Menu/>
    </main>
  )
}

export default App
