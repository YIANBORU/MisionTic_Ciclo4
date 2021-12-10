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

import co.grupo4.api.models.DuenoModel;
import co.grupo4.api.services.DuenoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT }) 
@RequestMapping("/dueno")
public class DuenoController {
    @Autowired
    DuenoService duenoService;

    @GetMapping()
    public ArrayList<DuenoModel> obteneDuenos() {
        return duenoService.obtenerDuenos();
    }

    @PostMapping()
    public DuenoModel guardarDueno(@RequestBody DuenoModel dueno) {
        return duenoService.guardarDueno(dueno);
    }
    @DeleteMapping(path = "{id}")
    public String eliminarDuenoPorID(@PathVariable("id") String id){
        if(this.duenoService.eliminarDuenoPorID(id)){
            return "Se elimino el usuario con el id: "+id;
        }else{
            return "No existe ese id";
        }
    }
    @GetMapping(path = "/{id}")
    public Optional<DuenoModel> obtenerDuenoPorId(@PathVariable("id") String id){
        return this.duenoService.obtenerDuenoPorId(id);
    }
    @GetMapping(path = "/nombre/{nombre}")
    public ArrayList<DuenoModel> duenoPorNombre(@PathVariable("nombre") String nombre){
        return duenoService.obtenerPorNombre(nombre);
    }
}