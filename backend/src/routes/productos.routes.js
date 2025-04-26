import { Router } from "express";

import { methodHTTP as productoController } from "../controllers/productos.controllers.js";
const router = Router();
router.put("/", productoController.putproductos);router.use(cors()); 
