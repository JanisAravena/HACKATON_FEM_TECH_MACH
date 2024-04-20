const express = require('express');
const router = express.Router();
const CrearUsuario = require('../controllers/user-create');
const multer = require('multer');



// Multer para Usuarios
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/Crear-usuario', CrearUsuario);
// router.post('/Login-usuario', LoginUser)
// router.put('/Actualizar-Usuario/:id', ActualizarUser);
// router.delete('/Borrar-Usuario/:id', DeleteUser);


module.exports = router;

