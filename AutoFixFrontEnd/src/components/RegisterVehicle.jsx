import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import vehicleService from "../services/vehicle.service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import SaveIcon from "@mui/icons-material/Save";
import { MenuItem } from "@mui/material";

const RegisterVehicle = () => {
    const [plate, setPlate] = useState("");
    const [brand, setBrand] = useState("");
    const [mileage, setMileage] = useState("");
    const [model, setModel] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [motor, setMotor] = useState("");
    const [seats, setSeats] = useState("");
    const { id } = useParams();
    const [titleVehicleForm, setTitleVehicleForm] = useState("");
    const navigate = useNavigate();

    const saveVehicle = (v) => {
        v.preventDefault();

        const vehicle = { plate, brand, mileage, model, type, year, motor, seats, id };
        if (id) {
            vehicleService
                .update(vehicle)
                .then((response) => {
                    console.log("Vehículo ha sido actualizado.", response.data);
                    navigate("/vehicle/list");
                })
                .catch((error) => {
                    console.log("Ocurrió un error al actualizar el vehículo.", error);
                });
        } else {
            vehicleService
                .create(vehicle)
                .then((response) => {
                    console.log("Vehículo ha sido registrado.", response.data);
                    navigate("/vehicle/list");
                })
                .catch((error) => {
                    console.log("Ocurrió un error al crear el vehículo.", error);
                });
        }
    };

    useEffect(() => {
        if (id) {
            setTitleVehicleForm("Editar Vehículo");
            vehicleService
                .get(id)
                .then((vehicle) => {
                    setPlate(vehicle.data.plate);
                    setBrand(vehicle.data.brand);
                    setMileage(vehicle.data.mileage);
                    setModel(vehicle.data.model);
                    setType(vehicle.data.type);
                    setYear(vehicle.data.year);
                    setMotor(vehicle.data.motor);
                    setSeats(vehicle.data.seats);
                })
                .catch((error) => {
                    console.log("Se produjo un error.", error);
                });
        } else {
            setTitleVehicleForm("Registrar Nuevo Vehículo");
        }
    }, []);
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            component="form"
        >
            <hr />
            <h3> {titleVehicleForm} </h3>
            <hr />
            <form>
                <FormControl width="25%">
                    <TextField
                        id="plate"
                        label="Patente"
                        value={plate}
                        variant="standard"
                        onChange={(v) => setPlate(v.target.value)}
                    />
                </FormControl>

                <FormControl width="25%">
                    <TextField
                        id="brand"
                        label="Marca"
                        value={brand}
                        variant="standard"
                        onChange={(v) => setBrand(v.target.value)}
                    />
                </FormControl>

                <FormControl width="25%">
                    <TextField
                        id="mileage"
                        label="Kilometraje"
                        type="number"
                        value={mileage}
                        variant="standard"
                        onChange={(v) => setMileage(v.target.value)}
                    />
                </FormControl>

                <FormControl width="25%">
                    <TextField
                        id="model"
                        label="Modelo"
                        value={model}
                        variant="standard"
                        onChange={(v) => setModel(v.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        id="type"
                        label="Tipo"
                        value={type}
                        select
                        variant="standard"
                        defaultValue="Sedán"
                        onChange={(v) => setType(v.target.value)}
                        style={{ width: "25%"}}
                    >
                        <MenuItem value={"Sedán"}>Sedán</MenuItem>
                        <MenuItem value={"Hatchback"}>Hatchback</MenuItem>
                        <MenuItem value={"SUV"}>SUV</MenuItem>
                        <MenuItem value={"Pickup"}>Pickup</MenuItem>
                        <MenuItem value={"Furgoneta"}>Furgoneta</MenuItem>
                    </TextField>
                </FormControl>
                
                <FormControl width="25%">
                    <TextField
                        id="year"
                        label="Año"
                        type="number"
                        value={year}
                        variant="standard"
                        onChange={(v) => setYear(v.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        id="motor"
                        label="Motor"
                        value={motor}
                        select
                        variant="standard"
                        defaultValue="Gasolina"
                        onChange={(v) => setMotor(v.target.value)}
                        style={{ width: "25%"}}
                    >
                        <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                        <MenuItem value={"Diésel"}>Diésel</MenuItem>
                        <MenuItem value={"Híbrido"}>Híbrido</MenuItem>
                        <MenuItem value={"Eléctrico"}>Eléctrico</MenuItem>
                    </TextField>
                </FormControl>

                <FormControl width="25%">
                    <TextField
                        id="seats"
                        label="Asientos"
                        type="number"
                        value={seats}
                        variant="standard"
                        onChange={(v) => setSeats(v.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <br />
                    <Button
                        variant="contained"
                        color="info"
                        onClick={(v) => saveVehicle(v)}
                        style={{ marginLeft: "0.5rem" }}
                        startIcon={<SaveIcon />}
                    >
                        Guardar Vehículo
                    </Button>
                </FormControl>
            </form>
            <hr />
            <Link to ="/vehicle/list">Mostrar Lista de Vehículos</Link>
        </Box>
    );
};

export default RegisterVehicle;