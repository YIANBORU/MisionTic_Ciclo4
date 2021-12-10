package co.grupo4.api.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "mascota")
public class MascotaModel {
    @Id
    private String id;
    private String nombre;
    private String raza;
    private String fecha_nacimiento;
    private LocalDate fecha_vacuna1;
    private LocalDate fecha_vacuna2;
    private LocalDate fecha_vacuna3;
    private LocalDate fecha_vacuna4;
    private LocalDate fecha_vacuna5;
    private String estado_vacunas;
    private String estado_salud;
    private DuenoModel dueno;
    
    public MascotaModel() {
    }

    

    public MascotaModel(String id, String nombre, String raza, String fecha_nacimiento, LocalDate fecha_vacuna1,
            LocalDate fecha_vacuna2, LocalDate fecha_vacuna3, LocalDate fecha_vacuna4, LocalDate fecha_vacuna5,
            String estado_vacunas, String estado_salud, DuenoModel dueno) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.fecha_nacimiento = fecha_nacimiento;
        this.fecha_vacuna1 = fecha_vacuna1;
        this.fecha_vacuna2 = fecha_vacuna2;
        this.fecha_vacuna3 = fecha_vacuna3;
        this.fecha_vacuna4 = fecha_vacuna4;
        this.fecha_vacuna5 = fecha_vacuna5;
        this.estado_vacunas = estado_vacunas;
        this.estado_salud = estado_salud;
        this.dueno = dueno;
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

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public LocalDate getFecha_vacuna1() {
        return fecha_vacuna1;
    }

    public void setFecha_vacuna1(LocalDate fecha_vacuna1) {
        this.fecha_vacuna1 = fecha_vacuna1;
    }

    public LocalDate getFecha_vacuna2() {
        return fecha_vacuna2;
    }

    public void setFecha_vacuna2(LocalDate fecha_vacuna2) {
        this.fecha_vacuna2 = fecha_vacuna2;
    }

    public LocalDate getFecha_vacuna3() {
        return fecha_vacuna3;
    }

    public void setFecha_vacuna3(LocalDate fecha_vacuna3) {
        this.fecha_vacuna3 = fecha_vacuna3;
    }

    public LocalDate getFecha_vacuna4() {
        return fecha_vacuna4;
    }

    public void setFecha_vacuna4(LocalDate fecha_vacuna4) {
        this.fecha_vacuna4 = fecha_vacuna4;
    }

    public LocalDate getFecha_vacuna5() {
        return fecha_vacuna5;
    }

    public void setFecha_vacuna5(LocalDate fecha_vacuna5) {
        this.fecha_vacuna5 = fecha_vacuna5;
    }

    public String getEstado_vacunas() {
        return estado_vacunas;
    }

    public void setEstado_vacunas(String estado_vacunas) {
        this.estado_vacunas = estado_vacunas;
    }

    public String getEstado_salud() {
        return estado_salud;
    }

    public void setEstado_salud(String estado_salud) {
        this.estado_salud = estado_salud;
    }

    public DuenoModel getdueno() {
        return dueno;
    }

    public void setdueno(DuenoModel dueno) {
        this.dueno = dueno;
    }


}
