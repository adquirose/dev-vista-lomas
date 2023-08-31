import { Container, Row, Col } from 'reactstrap'
import LogoTavacorp from '../../assets/images/tavacorp-logo.png'
import LogoVistaLomas from '../../assets/images/logo.png';

function Footer() {
  return (
    <div id="footer" className='section'>
        <Container>
            <Row className='border'>
                <Col>
                    <div style={{paddingLeft:'25px'}}>
                        <h6>Avenida La Dehesa 1201, oficina 709, Edificio Oriente. Santiago.</h6> 
                        <h6>vistalomas@tavacorp.cl</h6>
                        <h6>+56 9 2702 2045</h6>
                        <h5>VISTALOMAS.CL</h5>
                    </div>
                </Col>
                <Col className='d-flex flex-row justify-content-md-end justify-content-center'>
                    <img src={LogoTavacorp}  style={{ height:'60px'}} alt="logo-tavacorp"/>
                    <div style={{width:'contain', border:'1px solid white', marginLeft:'10px', marginRight:'25px'}}>
                        <img src={LogoVistaLomas}  style={{width:'60px'}} alt="logo-vistalomas"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer