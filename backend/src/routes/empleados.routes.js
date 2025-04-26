import { Router } from "express";   
import {methodHTTP as empleadoController}  from "../controllers/empleados.controllers.js";  
const router = Router();
router.get("/", empleadoController.getEmpleados);