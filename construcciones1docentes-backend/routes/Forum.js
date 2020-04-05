const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const ConsultaSchema = new Schema({
  _id: ObjectID,
  titulo: String,
  descripsion: String,
  tema: String,
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

router.get("/bytema/:tema", async(req, res) => {
  try {
    const tema = req.params.tema;
    const respuesta =  await ConsultaModel.find({tema});
    res.json({ mensaje: "listado resultados", resultados: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});


router.get("/:id", async(req, res) => {
  const id = req.params.id
  try {
   const respuesta =  await ConsultaModel.findById(id);
   res.json({ mensaje: "listado consultas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

router.post("/", async (req, res) => {
  const consultaNuevo = new ConsultaModel({
    _id: new ObjectID(),
    titulo: req.body.titulo,
    descripsion: req.body.descripsion,
    respuesta: "",
    respondido: false,
    tema: req.body.tema
    
  });

  try {
    const respuesta = await consultaNuevo.save();
    res.json({ mensaje: "consulta nueva creado", documento: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear consulta", tipo: error });
  }
});


// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// PARA DOCENTES UNICAMENTE

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const respuestasModificadas = req.body;
  try {
    const respuesta =  await ConsultaModel.findByIdAndUpdate(id,respuestasModificadas);
    res.json({ mensaje: "consulta respondida", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});


// BORRAR SOLO UN ARCHIVO

router.delete("/:id", async(req, res) => {
  const id = req.params.id;
  try {
    const respuesta =  await ConsultaModel.findByIdAndDelete(id);
    res.json({ mensaje: "consultas borradas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});




// BORRA TODOS LOS ARCHIVOS QUE EXISTAN
router.delete("/", async(req, res) => {
  
  try {
    const respuesta =  await ConsultaModel.deleteMany();
    res.json({ mensaje: "consultas borradas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});



module.exports = router;