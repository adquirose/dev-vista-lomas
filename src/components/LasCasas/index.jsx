import { Container, Row, Col, List } from 'reactstrap'

function LasCasas() {
  return (
    <div id="las-casas" className='section'>
        <Container className='pt-4'>
            <Row>
                <Col md="4" className='d-flex align-items-center'>
                    <div className='mb-5 ms-3'>
                        <h2>LAS CASAS</h2>
                        <div className='subraya bg-white'/>
                    </div>
                </Col>
                <Col md="8">
                    <List>
                        <li>Casas Mediterráneas de 322 m2 totales construidos. Terrenos hasta 764 m2.</li>
                        <li>Porche de acceso y Hall de ingreso.</li>
                        <li>Living comedor y cocina integrables.</li>
                        <li>Terraza con vistas increíbles y conexión al jardín</li>
                        <li>Baño de visitas.</li>
                        <li>Dormitorio principal en suite con walk in closet y closet para ropa blanca. Gran Patio de Luz conectado a Sala de Estar.</li>
                        <li>Sector para estudiar o home office.</li>
                        <li>3 dormitorios iguales.</li>
                        <li>Closet de ropa blanca.</li>
                        <li>Pieza y baño de servicio separados con un amplio lavadero.</li>
                        <li>3 estacionamientos privados.</li>
                    </List>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default LasCasas