import Emplazamiento from "./components/Emplazamiento"
import Header from "./components/Header"
import Navigator from "./components/Navigator"
import Proyecto from "./components/Proyecto"
import Cotiza from "./components/Cotiza"
import RenderInterior from "./components/RenderInterior"
import LasCasas from "./components/LasCasas"
import BarrioEntorno from "./components/BarrioEntorno"
import Masterplan360 from "./components/Masterplan360"
import LifeStyle from "./components/LifeStyle"
import Ubicacion from "./components/Ubicacion"
import Contacto from "./components/Contacto"
import Perfil from "./components/Perfil"
import Footer from "./components/Footer"
import Ws from "./components/Ws"

function App() {
  return (
    <>
        <Navigator/>
        <Header/>
        <Proyecto/>
        <Emplazamiento/>
        <Cotiza/>
        <RenderInterior/>
        <LasCasas/>
        <BarrioEntorno/>
        <Masterplan360/>
        <LifeStyle/>
        <Ubicacion/>
        <Contacto/>
        <Perfil/>
        <Footer/>
        <Ws/>
    </>
  )
}
export default App
