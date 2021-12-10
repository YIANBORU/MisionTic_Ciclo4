import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'



const FormNewOwner = () => {

    const history = useHistory();

    const [data, setData] = useState({ id: "", nombre: "", direccion: "", telefono: "", correo: "" })

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:8080/dueno";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);

        if (response.status === 200) {
            Swal.fire(
                "Guardado!",
                ` ${response.data.nombre} ha sido guardado con exito!`,
                "success"
            )
            history.push("/owners")
        } else {
            console.log(response.status, response)
            Swal.fire(
                "Error",
                `Aush!! hubo un problema al guardar a ${response.data.nombre}`,
                "error"
            )
        }
    }
    return (
        <Container>


            <Form autocomplete="off" onSubmit={handleSubmit}>
                <Row>
                <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero Identificación</Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                placeholder="Numero Identificación"
                                required
                                value={data.id}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                required
                                value={data.nombre}
                                onChange={handleChange}
                            >
                            </Form.Control >
                        </Form.Group >
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                type="text"
                                name="direccion"
                                placeholder="Dirección"
                                required
                                value={data.direccion}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                
                
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefono - Celular</Form.Label>
                            <Form.Control
                                type="tel"
                                name="telefono"
                                required
                                value={data.telefono}
                                onChange={handleChange}
                                
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control
                                type="email"
                                name="correo"
                                required
                                value={data.correo}
                                onChange={handleChange}
                                
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    
                    {/* <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Dueño</Form.Label>
                            <Form.Control
                                type="text"
                                name="dueno"
                                required
                                value={data.dueno}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col> */}
                </Row>
                <button className="btn btn-success">Guardar</button>
            </Form>


        </Container>
    )
}

export default FormNewOwner
