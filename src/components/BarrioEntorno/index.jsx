import { Container, Row, Col, List } from 'reactstrap'
import Img1 from '../../assets/images/barrio-entorno/img1.jpg'
import Img2 from '../../assets/images/barrio-entorno/img2.jpg'
import Img3 from '../../assets/images/barrio-entorno/img3.jpg'
import Img4 from '../../assets/images/barrio-entorno/img4.jpg'
import Img5 from '../../assets/images/barrio-entorno/img5.jpg'
import Img6 from '../../assets/images/barrio-entorno/img6.jpg'

import { Hat3, Hospital32, ShoppingBag } from '../Icons'
function BarrioEntorno() {
  return (
    <div id="barrio-entorno" className='section'>
      <Container>
        <Row>
          <Col lg="8" md="12" sm="12">
            <div className='pb-4'>
              <h2>BARRIO & ENTORNO</h2>
              <div className='subraya bg-white'/>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2,minmax(120px,1fr))', gridGap:'5px', justifyItems:'center'}}>
              <img src={Img1} style={{height:'auto'}} alt="img1"/>
              <img src={Img2} style={{height:'auto'}} alt="img2"/>
              <img src={Img3} style={{height:'auto'}} alt="img3"/>
              <img src={Img4} style={{height:'auto'}} alt="img4"/>
              <img src={Img5} style={{height:'auto'}} alt="img5"/>
              <img src={Img6} style={{height:'auto'}} alt="img6"/>
            </div>
          </Col>
          <Col lg="4" md="12" sm="12" className='d-flex flex-column justify-content-end pt-4 pt-md-0'>
            <div>
              <div className='pb-2'>
                <Hat3/><span className='ps-2'>COLEGIOS</span>
              </div>
              <List>
                <li>Craighouse</li>
                <li>Monte Tabor y Nazaret</li>
                <li>Everest</li>
                <li>Santiago College</li>
                <li>Newland</li>
                <li>Los Alerces</li>
                <li>Huinganal</li>
                <li>The Mayflower School</li>
                <li>Nido de Águilas</li> 
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <Hospital32/><span className='ps-2'> CLÍNICAS</span>
              </div>
              <List>
                <li>Meds</li>
                <li>Alemana</li>
                <li>Santa María</li>
              </List>
            </div>
            <div>
              <div className='pb-2'>
                <ShoppingBag/><span className='ps-2'>MALLS</span>
              </div>
              <List>
                <li>Paseo Los Trapenses</li>
                <li>VIVO Los Trapenses</li>
                <li>Puerta Los Trapenses</li>
                <li>Espacio Urbano</li>
                <li>Portal La Dehesa</li>
                <li>Futuro Mall Megacentro</li>
              </List>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
} 
export default BarrioEntorno