import getConnection from "../db/database";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT EmpleadoID, Nombre, Apellido, FechaNacimiento, Telefono, Titulo, Pais FROM empleados"
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener empleados:", error);
        res.status(500).json({ message: "Error al obtener empleados" });
    }
};

export const methodHTTP = {
    getEmpleados
};