const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

const AlumnoSchema = new Schema({
  _id: ObjectID,
  nombre: String,
  apellido: String,
  dni: { type: String, required: true, minlength: 8, maxlength: 8 },
  libreta: { type: String, required: true, maxlength: 9, minlength: 9 },
  mail: String,
});

const AlumnoModel = mongoose.model("comition2", AlumnoSchema);

router.get("/", async(req, res) => {
  try {
   const respuesta =  await AlumnoModel.find()
   res.json({ mensaje: "listado alumnos", alumnos: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: err });
  }
  res.json("COMITION1");
});

router.post("/", async (req, res) => {
  const alumnoNuevo = new AlumnoModel({
    _id: new ObjectID(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    libreta: req.body.libreta,
    mail: req.body.mail,
  });

  try {
    const respuesta = await alumnoNuevo.save();
    res.json({ mensaje: "alumno nuevo creado", documento: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear alumno nuevo", tipo: error });
  }
});

module.exports = router;
