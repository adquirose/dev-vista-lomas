import { Container, Row } from 'reactstrap'
import Mapa from '../../assets/images/mapa.png'

function Ubicacion() {
    const handleOnClickGM = () => {
        window.open('https://goo.gl/maps/1tSVSfbJZAGpByd57','_blank')
    }
    const handleOnClickWaze = () => {
        window.open('https://www.waze.com/ul?ll=-33.316298%2C-70.550121&navigate=yes&zoom=17','_blank')
    }
  return (
    <div id="ubicacion" className='section'>
        <Container>
            <Row className='d-flex align-items-center flex-column'>
                <img src={Mapa} style={{maxWidth:'740px', width:'100%', height:'auto'}} alt="img-mapa" />
                <div className='d-flex justify-content-center'>
                    <button onClick={handleOnClickGM} className='button my-4 me-1'>VER EN GOOGLEMAPS</button>
                    <button onClick={handleOnClickWaze} className='button my-4 ms-1'>VER EN WAZE</button>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Ubicacion