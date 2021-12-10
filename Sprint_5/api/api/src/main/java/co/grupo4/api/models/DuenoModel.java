package co.grupo4.api.models;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "dueno")
public class DuenoModel {
    @Id
    private String id;
    private String nombre;
    private String direccion;
    private String telefono;
    private String correo;
    private List<MascotaModel> mascotas;

    public DuenoModel() {
    }

    public DuenoModel(String id, String nombre, String direccion, String telefono, String correo,
            List<MascotaModel> mascotas) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
        this.mascotas = mascotas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public List<MascotaModel> getMascotas() {
        return mascotas;
    }

    public void setMascotas(List<MascotaModel> mascotas) {
        this.mascotas = mascotas;
    }

}