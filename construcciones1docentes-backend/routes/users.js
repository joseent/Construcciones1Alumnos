const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;


const UsuarioSchema = new Schema({
  _id: ObjectID,
  nombre: String,
  apellido: String,
  dni: { type: String, required: true, minlength: 8, maxlength: 8, unique: true   },
  libreta: { type: String, required: true, maxlength: 9, minlength: 9 },
  mail: String,
});


const UsuarioModel = mongoose.model("users", UsuarioSchema);


router.get("/:id", async(req, res) => {
  const id = req.params.id
  try {
   const respuesta =  await UsuarioModel.findById(id);
   res.json({ mensaje: "listado consultas", consultas: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});


router.post("/", async (req, res) => {
  const usuarioNuevo = new UsuarioModel({
    _id: new ObjectID(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    libreta: req.body.libreta,
    mail: req.body.mail,
  });

  try {
    const respuesta = await usuarioNuevo.save();
    res.json({ mensaje: "usuario registrado correctamente", documento: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error al crear usuario", tipo: error });
  }
});

router.put("/:id", async(req, res) => {
  const id = req.params.id;
  const informacionModificadas = req.body;
  try {
    const respuesta =  await UsuarioModel.findByIdAndUpdate(id,informacionModificadas);
    res.json({ mensaje: "informacion modificada", informacion: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});




module.exports = router;