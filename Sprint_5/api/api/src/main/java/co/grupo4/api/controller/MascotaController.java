package co.grupo4.api.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.grupo4.api.models.MascotaModel;
import co.grupo4.api.services.MascotaService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT }) 
@RequestMapping("/mascota")
public class MascotaController {
    @Autowired
    MascotaService mascotaService;

    @GetMapping()
    public ArrayList<MascotaModel> obteneMascotas() {
        return mascotaService.obtenerMascotas();
    }

    @PostMapping()
    public MascotaModel guardarMascota(@RequestBody MascotaModel mascota) {
        return mascotaService.guardarMascota(mascota);
    }
    @DeleteMapping(path = "{id}")
    public String eliminarMascotaPorID(@PathVariable("id") String id){
        if(this.mascotaService.eliminarMascotaPorID(id)){
            return "Se elimino la mascota con el id: "+id;
        }else{
            return "No existe ese id";
        }
    }
    @GetMapping(path = "/{id}")
    public Optional<MascotaModel> obtenerMascotaPorId(@PathVariable("id") String id){
        return this.mascotaService.obtenerMascotaPorId(id);
    }
    @GetMapping(path = "/nombre/{nombre}")
    public ArrayList<MascotaModel> mascotaPorNombre(@PathVariable("nombre") String nombre){
        return mascotaService.obtenerPorNombre(nombre);
    }

    @GetMapping(path = "/raza/{raza}")
    public ArrayList<MascotaModel> mascotaPorRaza(@PathVariable("raza") String raza){
        return mascotaService.obtenerPorRaza(raza);
    }
}