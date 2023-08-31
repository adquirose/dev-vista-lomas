import { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { ERemove, Menu8 } from '../Icons';
import Logo from '../../assets/images/logo.png'
import LogoTavacorp from '../../assets/images/tavacorp-logo.png'

function Navigator() {
    const [isOpen, setIsOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true);
    useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 360 ||
            document.body.scrollTop > 360
          ) {
            setLogoVisible(false);
          } else if (
            document.documentElement.scrollTop < 359 ||
            document.body.scrollTop < 359
          ) {
            setLogoVisible(true);
          }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });
    const toggle = () => setIsOpen(!isOpen);
    const mostrarLista = () => {
        return(
            <div style={{width:'100%', height:'100vh', backgroundColor:'rgba(0,0,0,0.35)', position:'fixed', top:'0', right:'0',zIndex:1040, display:'flex', justifyContent:'end'}}>
                <div style={{backgroundColor:'white', width:'480px'}}>
                    <button style={{width:'50px', height:'50px', background:'none', border:0, cursor:'pointer', position:'absolute', right:'24px',top:'24px'}} onClick={toggle}><ERemove/></button>
                    <ul>
                        <li className='bold'>INICIO</li>
                        <li className='bold pt-3'>PROYECTO EN VENTA</li>
                        <li><a onClick={toggle} href="#proyecto">El Proyecto</a></li>
                        <li><a onClick={toggle} href="#condominio">El Condominio</a></li>
                        <li><a onClick={toggle} href="#emplazamiento">Emplazamiento</a></li>
                        <li><a onClick={toggle} href="#cotiza">Plantas</a></li>
                        <li><a onClick={toggle} href="#las-casas">Las Casas</a></li>
                        <li><a onClick={toggle} href="#barrio-entorno">Barrio y entorno</a></li>
                        <li><a onClick={toggle} href="#masterplan360">Nube 360</a></li>
                        <li><a onClick={toggle} href="#ubicacion">Ubicación</a></li>
                        <li className='bold'><a onClick={toggle} href="#contacto">CONTACTO</a></li>
                        
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div id="navigator">
            <Container className='fixed-top pt-5'>
                <Row className='d-flex justify-content-between flex-row px-5'>
                    <div style={{width:'200px'}}>
                        { logoVisible && <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                            <div style={{width:'contain', border:'1px solid white'}}>
                                <img src={Logo} className='logo-vista-lomas' alt="img-logo" />
                            </div> 
                            <img src={LogoTavacorp} className='logo-tavacorp' alt="img-logo-tavacorp" /></div>}
                    </div>
                    <div style={{width:'50px', padding:0}}>
                        { !isOpen && 
                            <div style={{cursor:'pointer'}} onClick={toggle}>
                                <Menu8 width={42} color={'white'} height={42}/>
                            </div>
                        }
                    </div>
                </Row>
            </Container>
                
            { isOpen ? mostrarLista() : null }
        </div>
        
    );
}

export default Navigator;