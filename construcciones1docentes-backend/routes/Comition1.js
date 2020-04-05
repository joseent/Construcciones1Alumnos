const express = require('express');
const router = express.Router();



router.get('/Comition1', (req, res ) => {
    res.json("COMITION1");
  });



module.exports = router;
