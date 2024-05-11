// Utiliser la syntaxe import pour importer express
import express from 'express';
import { test } from '../Controllers/user.controller.js';


// Créer un routeur avec express
const router = express.Router();

// Définir une route GET sur le chemin '/test'
router.get('/test', test);

// Exporter le routeur pour être utilisé ailleurs
export default router;
