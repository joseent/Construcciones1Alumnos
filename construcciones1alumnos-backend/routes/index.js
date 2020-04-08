const express = require('express');
const router = express.Router();

const cors = require("cors"); // nos permite realizar peticiones a un servidor mediante url
router.use(express.json({ limit: '10mb' })); // interpretar el req.body, sino seria undefined
router.use(express.urlencoded({ extended: false , limit: '10mb'})); // idem anterior, son configuraciones de seguridad para el req.body
router.use(cors()); // aqui decimos que app utilize los cors requeridos en la linea 3
router.options("*", cors()); // idem anterior


const informatioRouter = require('./Information')
const comition1Router = require('./Comition1')
const comition2Router = require('./Comition2')
const comition3Router = require('./Comition3')
const comition4Router = require('./Comition4')
const comition5Router = require('./Comition5')
const comition6Router = require('./Comition6')
const comition7Router = require('./Comition7')
const forumRouter = require('./Forum')
const InscriptionsRouter = require('./Inscriptions')
const UserRouter = require('./users')




/* GET home page. */
router.get('/', (req, res ) => {
  res.json("hola");
});


// USERS
router.use('/users', UserRouter);


// INFORMATION
router.use('/Information', informatioRouter);

// COMITIONS
router.use('/Comition1', comition1Router);
router.use('/Comition2', comition2Router);
router.use('/Comition3', comition3Router);
router.use('/Comition4', comition4Router);
router.use('/Comition5', comition5Router);
router.use('/Comition6', comition6Router);
router.use('/Comition7', comition7Router);

// FORUM
router.use('/Forum', forumRouter);

// INSCRIPTIONS
router.use('/Inscriptions', InscriptionsRouter);



module.exports = router;
