import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar';
import * as ReactBootStrap from "react-bootstrap";
import RegisterPet from './RegisterPet';
import * as Icon from 'react-bootstrap-icons';
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { Col, Container, Form, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';

/* const General = () => {

  const [pets, setPets] = useState({ documents: [] })

  useEffect(() => {
    const fetchPetsList = async () => {
      const { data } = await axios(
        "http://localhost:8080/mascota"
      );
      setPets({
        documents: data
      });
      console.log(data);
    };
    fetchPetsList();
  }, [setPets]); */



const General = () => {
  const baseURL = "http://localhost:8080/mascota/"
  const [data, setData] = useState([])

  const peticionGet = async () => {
    await axios(baseURL)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    peticionGet();
  }, [setData]);

  const peticionPost = async () => {
    await axios.post(baseURL, mascotaSeleccionada)
      .catch(error => {
        console.log(error);
      })
    peticionGet();
    abrirCerrarModalEditar();
  }

  const peticionDelete = async () => {
    await axios.delete(baseURL + mascotaSeleccionada.id)
      .then(response => {
        setData(data.filter(mascota => mascota.id !== mascotaSeleccionada.id));
        abrirCerrarModalEliminar();
        Swal.fire(
          "confirmado",
          response.data,
          "warning"
        )
      }).catch(error => {
        console.log(error);
      })
  }

  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionado] = useState({
  })

  const seleccionarCliente = (elemento, caso) => {
    setMascotaSeleccionado(elemento);
    (caso === "Editar") ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  }

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setMascotaSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const [datosBusqueda, setDatosBusqueda] = useState({
    caja: "",
    filtro: "1"
  });

  const handleInputChange = (event) => {
    setDatosBusqueda({
      ...datosBusqueda,
      [event.target.name]: event.target.value
    })
  }

  const buscarMascota = async () => {
    switch (datosBusqueda.filtro) {
      case "1":
        await axios.get(baseURL + datosBusqueda.caja)
          .then(response => {
            if (response.data !== null) {
              setData([response.data]);
            }
            else {
              Swal.fire(
                "No hay resultado!",
                "",
                "info")
            };
          }).catch(error => {
            console.log(error);
          });
        break;

      case "2":
        await axios.get(baseURL + "nombre/" + datosBusqueda.caja.toLowerCase())
          .then(response => {
            if (response.data.length !== 0) {
              setData(response.data);
            } else {
              Swal.fire(
                "No hay Resultado!",
                "",
                "info")
            };
          }).catch(error => {
            console.log(error);
          });
        break;

      case "3":
        console.log(baseURL + "raza/" + datosBusqueda.caja)
        await axios.get(baseURL + "raza/" + datosBusqueda.caja)
          .then(response => {
            if (response.status === 200) {
              setData(response.data);
            } else {
              Swal.fire(
                "No hay Resultado!",
                "",
                "info")
            };
          }).catch(error => {
            console.log(error);
          });
        break;

      default:
        console.log("defaul");


    }
  }




  return (
    <div>
      <NavBar />
      <ReactBootStrap.Form>
                <ReactBootStrap.Row>
                <ReactBootStrap.Col className="my-1 d-flex justify-content-start">
            <RegisterPet />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                    <ReactBootStrap.Form.Control name="caja" onChange={handleInputChange} placeholder="Buscar..."/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Form.Select name="filtro" onChange={handleInputChange}>
                        <option selected disabled value="">Seleccione...</option>
                            <option disabled value="1">Id</option>
                            <option value="2">Nombre</option>
                            <option value="3">Raza</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1 ">
                        <ReactBootStrap.Button onClick={()=>buscarMascota()}><Icon.Search /></ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Form>


      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Nombre</th>
            <th scope="col">Raza</th>
            <th scope="col">Fecha Nacimiento</th>
            <th scope="col">1er Dosis</th>
            <th scope="col">2da Dosis</th>
            <th scope="col">3er Dosis</th>
            <th scope="col">4ta Dosis</th>
            <th scope="col">5ta Dosis</th>
            <th scope="col">Esquema</th>
            <th scope="col">Estado</th>
            <th scope="col">Dueño</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                {/*  <td>{item.id}</td> */}
                <td>{item.nombre}</td>
                <td>{item.raza}</td>
                <td>{item.fecha_nacimiento}</td>
                <td>{item.fecha_vacuna1}</td>
                <td>{item.fecha_vacuna2}</td>
                <td>{item.fecha_vacuna3}</td>
                <td>{item.fecha_vacuna4}</td>
                <td>{item.fecha_vacuna5}</td>
                <td>{item.estado_vacunas}</td>
                <td>{item.estado_salud}</td>
                <td>dueño</td>
                <td>
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Editar Mascota
                      </ReactBootStrap.Tooltip>
                    }
                  >
                    <button className="btn btn-primary" onClick={() => seleccionarCliente(item, "Editar")}><Icon.PencilSquare /></button>
                  </ReactBootStrap.OverlayTrigger>
                  {"    "}
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Eliminar Mascota
                      </ReactBootStrap.Tooltip>
                    }
                  >
                    <button className="btn btn-danger" onClick={() => seleccionarCliente(item)}><Icon.Trash /></button>
                  </ReactBootStrap.OverlayTrigger>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
      <Modal size="lg"
        show={modalEditar}
        keyboard={false}>
        <Modal.Header>
          <Modal.Title>Editar Mascota</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                    value={mascotaSeleccionada.nombre}
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
                    value={mascotaSeleccionada.raza}
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
                    value={mascotaSeleccionada.fecha_nacimiento}
                    onChange={handleChange}
                    format="yyyy-mm-dd"
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
                    value={mascotaSeleccionada.fecha_vacuna1}
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
                    value={mascotaSeleccionada.fecha_vacuna2}
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
                    value={mascotaSeleccionada.fecha_vacuna3}
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
                    value={mascotaSeleccionada.fecha_vacuna4}
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
                    value={mascotaSeleccionada.fecha_vacuna5}
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
                    value={mascotaSeleccionada.estado_vacunas}
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
                  value={mascotaSeleccionada.estado_salud}
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
                                value={mascotaSeleccionada.dueno}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col> */}
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => peticionPost()}>Actualizar</button>
          <button className="btn btn-danger" onClick={() => abrirCerrarModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal show={modalEliminar}>
        <ModalBody>
          ¿Esta seguro que desea eliminar a {mascotaSeleccionada.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => peticionDelete()}>Si</button>
          <button className="btn btn-secundary" onClick={() => abrirCerrarModalEliminar()}>No</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default General
