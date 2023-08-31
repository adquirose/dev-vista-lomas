import { Container, Row } from 'reactstrap'
import PerfilImage from '../../assets/images/perfil.png'
function Perfil() {
  return (
    <div id="perfil" className='section'>
        <Container>
            <Row className='d-flex justify-content-center'>
                <img style={{maxWidth:'1200px', height:'auto'}} src={PerfilImage} alt="perfil-image" />
            </Row>
        </Container>
    </div>
  )
}

export default Perfil