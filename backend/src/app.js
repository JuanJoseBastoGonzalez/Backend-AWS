import express from 'express';
import categoriasROutes from './routes/categorias.routes.js';
import cors from 'cors';

const app = express();
app.set("port",5000);
app.use(express.json());
app.use(cors());    
app.use("/api/categorias",categoriasROutes)
export default app;