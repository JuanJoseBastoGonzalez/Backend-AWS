import getConnection from "../db/database";

const postEmpleados = async (req, res) => {
    try {
        const {
            EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento,
            FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais,
            Telefono, Extension, Foto, Notas, Jefe, RutaFoto
        } = req.body;

        // Construcción del objeto empleado usando valores predeterminados
        const empleado = {
            EmpleadoID: EmpleadoID || null,
            Apellido: Apellido || null,
            Nombre: Nombre || null,
            Titulo: Titulo || null,
            TituloCortesia: TituloCortesia || null,
            FechaNacimiento: FechaNacimiento || null,
            FechaContratacion: FechaContratacion || null,
            Direccion: Direccion || null,
            Ciudad: Ciudad || null,
            Regiones: Regiones || null,
            CodigoPostal: CodigoPostal || null,
            Pais: Pais || null,
            Telefono: Telefono || null,
            Extension: Extension || null,
            Foto: Foto || null,
            Notas: Notas || null,
            Jefe: Jefe || null,
            RutaFoto: RutaFoto || null
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO empleados SET ?", empleado);

        res.status(201).json({ message: "Empleado agregado exitosamente", result });
        console.log("Empleado agregado:", empleado);
    } catch (error) {
        console.error("Error al agregar empleado:", error);
        res.status(500).json({ message: "Error al agregar empleado" });
    }
};

export const methodHTTP = {
    postEmpleados
};