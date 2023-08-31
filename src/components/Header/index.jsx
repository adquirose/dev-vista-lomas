import { Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import HeaderImg1 from '../../assets/images/header/ext1.jpg';
import HeaderImg2 from '../../assets/images/header/ext2.jpg';
import HeaderImg3 from '../../assets/images/header/ext3.jpg';

function Header() {
  return (
    <div id="header">
      <Container>
        <Row className='d-flex justify-content-center'>
          <div style={{position:'relative'}} className='header-container'>
            <Swiper
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
            >
              <SwiperSlide><img src={HeaderImg1} alt="ext1"/></SwiperSlide>
              <SwiperSlide><img src={HeaderImg2} alt="ext2"/></SwiperSlide>
              <SwiperSlide><img src={HeaderImg3} alt="ext3"/></SwiperSlide>
            </Swiper>
            <div style={{ position:'absolute', bottom:'30px', left:'30px',maxWidth:'320px', width:'100%', height:'120px', zIndex:15}}>
              <Container>
                <Row>
                  <p style={{fontWeight:500}}>
                    CONDOMINIO VISTA LOMAS<br/>
                    AV. LOS LITRES No 1800, LA DEHESA <br/>
                  </p>
                </Row>  
              </Container>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Header
