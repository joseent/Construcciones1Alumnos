const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const ConsultaSchema = new Schema({
  _id: ObjectID,
  titulo: String,
  descripsion: String,
  respuesta: String,
  respondido: Boolean,
},
{timestamps: { createdAt: 'created_at' }},
);

const ConsultaModel = mongoose.model("forum", ConsultaSchema);

router.get("/", async(req, res) => {
  try {
   const respuesta =  await ConsultaModel.find()
   res.json({ mensaje: "listado consultas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});


router.get("/:id", async(req, res) => {
  try {
   const respuesta =  await ConsultaModel.find()
   res.json({ mensaje: "listado consultas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
});



router.post("/", async (req, res) => {
  const consultaNuevo = new ConsultaModel({
    _id: new ObjectID(),
    titulo: req.body.titulo,
    descripsion: req.body.descripsion,
    respuesta: "",
    respondido: false,
    
    
  });

  try {
    const respuesta = await consultaNuevo.save();
    res.json({ mensaje: "consulta nueva creado", documento: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear consulta", tipo: error });
  }
});

module.exports = router;
