package co.grupo4.api.repositories;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import co.grupo4.api.models.MascotaModel;

public interface MascotaRepository extends MongoRepository<MascotaModel, String> {

    ArrayList<MascotaModel>findByNombre (String nombre);

    @Query("{raza:'?0'}")
    ArrayList <MascotaModel> buscarPorRaza(String raza);
    
}
