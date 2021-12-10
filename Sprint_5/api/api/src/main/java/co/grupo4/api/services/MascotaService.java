package co.grupo4.api.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.grupo4.api.models.MascotaModel;
import co.grupo4.api.repositories.MascotaRepository;

@Service
public class MascotaService {
    @Autowired
    MascotaRepository mascotaRepository;
    
    public ArrayList<MascotaModel> obtenerMascotas(){
        return (ArrayList<MascotaModel>)mascotaRepository.findAll();
    }
    public MascotaModel guardarMascota(MascotaModel mascota){
        return mascotaRepository.save(mascota);
    }
public boolean eliminarMascotaPorID(String id){
    if (mascotaRepository.existsById(id)){
        mascotaRepository.deleteById(id);
        return true;
    }else{
        return false;
    }
}
public Optional<MascotaModel> obtenerMascotaPorId(String id){
    return mascotaRepository.findById(id);
}

public ArrayList<MascotaModel> obtenerPorNombre(String nombre){
    return mascotaRepository.findByNombre(nombre.toLowerCase());
}

public ArrayList<MascotaModel> obtenerPorRaza(String raza){
    return mascotaRepository.buscarPorRaza(raza);
}
}
