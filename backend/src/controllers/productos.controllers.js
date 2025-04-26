import getConnection from "../db/database";

const putproductos = async (req, res) => {
    try {
        const { ProductoID, Nombre, Descripcion, Precio, Stock, CategoriaID } = req.body;
        const producto = {
            ProductoID: ProductoID,
            Nombre: Nombre,
            Descripcion: Descripcion,
            Precio: Precio,
            Stock: Stock,
            CategoriaID: CategoriaID
        };
        console.log(req.body);
        const connection = await getConnection();
        console.log(ProductoID, Nombre, Descripcion, Precio, Stock, CategoriaID);
        const result = await connection.query("INSERT INTO productos SET ?", producto);
        res.json({ "productoNombre": "Ropa Femenina" });
    }
    catch (error) {
        console.error("Error 500");
    }
}

export const methodHTTP = {
    putproductos
};