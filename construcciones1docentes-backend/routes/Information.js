const express = require('express');
const router = express.Router();



router.get('/', (req, res ) => {
    res.json("Listado de info");
  });


router.get('/:id', (req, res ) => {
    res.json("Informacion unica");
  });

// ESTO ES PARA LA DE DOCENTES UNICAMENTE
// router.post('/', (req, res ) => {
//     res.json("crear Informacion ");
//   }
// {timestamps} para ver la hora en la que se creo el documento
// );


// router.put('/:idIndo', (req, res ) => {
//     res.json("modificar informacion");
//   });


// router.delete('/:idIndo', (req, res ) => {
//     res.json("borrar informacion");
//   });
  




module.exports = router;
