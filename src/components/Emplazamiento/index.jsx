import { Container, Row } from 'reactstrap';
import ImgEmplazamiento from '../../assets/images/emplazamiento/emplazamiento.jpg';

function Emplazamiento() {
  return (
    <div id="emplazamiento" className='section'>
        <Container>
          <Row>
            <div className='image-container'>
                <div className='pt-5 justify-self-start'>
                    <h2>EMPLAZAMIENTO</h2>
                    <div className='subraya bg-black'/>
                </div>
                
                <img className="align-self-center image-emplazamiento" src={ImgEmplazamiento} alt="img-emplazamiento"/>
            </div>
          </Row>
        </Container>
    </div>
  )
}

export default Emplazamiento