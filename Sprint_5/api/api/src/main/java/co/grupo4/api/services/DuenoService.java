package co.grupo4.api.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.grupo4.api.models.DuenoModel;
import co.grupo4.api.repositories.DuenoRepository;

@Service
public class DuenoService {
    @Autowired
    DuenoRepository duenoRepository;
    
    public ArrayList<DuenoModel> obtenerDuenos(){
        return (ArrayList<DuenoModel>)duenoRepository.findAll();
    }
    public DuenoModel guardarDueno(DuenoModel dueno){
        return duenoRepository.save(dueno);
    }
public boolean eliminarDuenoPorID(String id){
    if (duenoRepository.existsById(id)){
        duenoRepository.deleteById(id);
        return true;
    }else{
        return false;
    }
}
public Optional<DuenoModel> obtenerDuenoPorId(String id){
    return duenoRepository.findById(id);
}

public ArrayList<DuenoModel> obtenerPorNombre(String nombre){
    return duenoRepository.findByNombre(nombre);
}
}
