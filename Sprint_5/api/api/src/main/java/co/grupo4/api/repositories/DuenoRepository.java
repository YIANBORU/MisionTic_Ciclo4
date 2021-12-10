package co.grupo4.api.repositories;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.grupo4.api.models.DuenoModel;

public interface DuenoRepository extends MongoRepository<DuenoModel, String> {

    ArrayList<DuenoModel>findByNombre (String nombre);
    
}
