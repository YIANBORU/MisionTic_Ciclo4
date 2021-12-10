import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'



const FormNewPet = () => {

    const history = useHistory();

    const [data, setData] = useState({ nombre: "", raza: "", fecha_nacimiento: "", fecha_vacuna1: "", fecha_vacuna2: "", fecha_vacuna3: "", fecha_vacuna4: "", fecha_vacuna5: "", estado_vacunas: "", estado_salud: "" })

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:8080/mascota";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);

        if (response.status === 200) {
            Swal.fire(
                "Guardado!",
                `El Amigo: ${response.data.nombre} ha sido guardado con exito!`,
                "success"
            )
            history.push("/pets")
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


            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
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
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Raza</Form.Label>
                            <Form.Control
                                type="text"
                                name="raza"
                                placeholder="Raza"
                                required
                                value={data.raza}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_nacimiento"
                                placeholder="Fecha de Nacimiento"
                                required
                                value={data.fecha_nacimiento}
                                onChange={handleChange}
                                format= "yyyy-mm-dd"
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Vacuna Monovalente</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_vacuna1"
                                value={data.fecha_vacuna1}
                                onChange={handleChange}
                                
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Vacuna Bivalente</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_vacuna2"
                                value={data.fecha_vacuna2}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Vacuna Polivalente</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_vacuna3"
                                value={data.fecha_vacuna3}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Vacuna Pentavalente</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_vacuna4"
                                value={data.fecha_vacuna4}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Vacuna Antirrabica</Form.Label>
                            <Form.Control
                                type="date"
                                name="fecha_vacuna5"
                                value={data.fecha_vacuna5}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Esquema de Vacunacion</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="Completo"
                                disabled
                                name="estado_vacunas"
                                value={data.estado_vacunas}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Label>Estado de Salud</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            name="estado_salud"
                            value={data.estado_salud}
                            onChange={handleChange}
                        >
                            <option disabled>Seleccione...</option>
                            <option value="Saludable">Saludable</option>
                            <option value="Enfermo">Enfermo</option>
                            <option value="Fallecido">Fallecido</option>
                        </Form.Select>
                    </Col>
                    {/* <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Dueño</Form.Label>
                            <Form.Control
                                type="text"
                                name="dueno"
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

export default FormNewPet
