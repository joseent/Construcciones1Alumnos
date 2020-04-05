const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const InscriptionSchema = new Schema({
  _id: ObjectID,
  habilitado: Boolean,
});

const InscriptionModel = mongoose.model("inscription", InscriptionSchema);

router.get("/:id", async(req, res) => {
  try {
   const respuesta =  await InscriptionModel.find()
   res.json({ mensaje: "listado informacion", informacion: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});



router.post("/", async (req, res) => {
  const inscriptionNuevo = new InscriptionModel({
    _id: new ObjectID(),
    habilitado: false
       
  });

  try {
    const respuesta = await inscriptionNuevo.save();
    res.json({ mensaje: "informacion nueva creado", documento: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear informacion", tipo: error });
  }
});

module.exports = router;
