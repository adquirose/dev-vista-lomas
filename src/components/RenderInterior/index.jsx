import { Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import DpImage from '../../assets/images/render-interior/dormitorio-principal.jpg';
import SeImage from '../../assets/images/render-interior/sala-estar.jpg';
import LivingImage from '../../assets/images/render-interior/living.jpg';
import ComedorImage from '../../assets/images/render-interior/comedor.jpg';
import D1Image from '../../assets/images/render-interior/dormitorio1.jpg';
import VCImage from '../../assets/images/render-interior/vista-conjunto.jpg';
import LE1Image from '../../assets/images/render-interior/lomas-exterior1.jpg';
import LE2Image from '../../assets/images/render-interior/lomas-exterior2.jpg';
import LE4Image from '../../assets/images/render-interior/lomas-exterior4.jpg';


function RenderInterior() {
    return (
        <div id="render-interior">
            <Container>
                <Row>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        breakpoints={{
                            // when window width is >= 490px
                            490: {
                              width: 490,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            }
                          }}
                        >
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={DpImage} alt="dp-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>DORMITORIO PRINCIPAL</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={SeImage} alt="se-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>SALA DE ESTAR</h3>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={LivingImage} alt="lc-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>LIVING</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={ComedorImage} alt="lc-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>COMEDOR</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={D1Image} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>DORMITORIO</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={VCImage} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>VISTA CONJUNTO</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={LE1Image} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>VISTA EXTERIOR 1</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={LE2Image} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>VISTA EXTERIOR 2</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={LE4Image} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>VISTA EXTERIOR 3</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
        </div>
    )
}
export default RenderInterior
