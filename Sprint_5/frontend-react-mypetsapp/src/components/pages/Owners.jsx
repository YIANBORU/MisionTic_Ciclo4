import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar';
import * as ReactBootStrap from "react-bootstrap";
import RegisterOwner from './RegisterOwner';
import Swal from 'sweetalert2';
import * as Icon from 'react-bootstrap-icons';





/* const Owners = () => {

    const [owners, setOwners] = useState({ documents: [] })

    useEffect(() => {
        const fetchOwnersList = async () => {
            const { data } = await axios(
                "http://localhost:8080/dueno"
            );
            setOwners({
                documents: data
            });
            console.log(data);
        };
        fetchOwnersList();
    }, [setOwners]); */

    const Owners = () => {
        const baseURL = "http://localhost:8080/dueno/"
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
            <RegisterOwner />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                    <ReactBootStrap.Form.Control name="caja" onChange={handleInputChange} placeholder="Buscar..."/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Form.Select name="filtro" onChange={handleInputChange}>
                        <option selected disabled value="">Seleccione...</option>
                            <option value="1">Cedula</option>
                            <option value="2">Nombre</option>
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
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Mascotas</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                                <td>{item.correo}</td>
                                <td>mascotas</td>
                                <td>
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Editar Dueño
                      </ReactBootStrap.Tooltip>
                    }
                  >
                    <button className="btn btn-primary" onClick={() => seleccionarCliente(item, "Editar")}><Icon.PencilSquare /></button>
                  </ReactBootStrap.OverlayTrigger>
                  {"    "}
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Eliminar Dueño
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
        </div>
    )
}

export default Owners
