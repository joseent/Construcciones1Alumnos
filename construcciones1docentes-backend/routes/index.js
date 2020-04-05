const express = require('express');
const router = express.Router();

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




/* GET home page. */
router.get('/', (req, res ) => {
  res.json("hola");
});


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
