import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBars } from '@fortawesome/free-solid-svg-icons'
import Title from './components/Title'
import Show from './components/show'
import MilkShakes from './components/MilkShakes'
import MocktailsMenu from './components/MocktailsMenu'
import Detox from './components/Detox'
import Jusfrais from './components/Jusfrais'
import Smooth from './components/Smooth'
import Frappee from './components/Frappee'
import Mojito from './components/Mojito'
import Cafenespreso from './components/Cafenespreso'
import BoissonChaud from './components/BoissonChaud'
import Thanks from './components/Thanks'

const App = () => {
  return (
    <main>
      <Title/>
      <Show/>
      <Cafenespreso/>
      <BoissonChaud/>
      <MilkShakes/>


     <MocktailsMenu/>
     <Detox/>
     <Jusfrais/>
     <Smooth/>
     <Frappee />
     <Mojito  />

     <Thanks/>
     

  
    </main>
  )
}

export default App
