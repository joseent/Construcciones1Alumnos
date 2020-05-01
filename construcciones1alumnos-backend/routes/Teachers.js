const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;
const bcryptjs = require("bcryptjs");

const encriptarPassWord = password =>{
const saltos = bcryptjs.genSaltSync(2);
const passwordEncriptado = bcryptjs.hashSync(password,saltos);
return passwordEncriptado
};

const compararPassword = (userPassword, hashPasswordDb) => bcryptjs.compareSync(userPassword, hashPasswordDb)

const TeachersSchema = new Schema({
  _id: ObjectID,
  usuario: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
    unique: true,
  },
  contrasena: {
    type:String,
    required: [true, "can't be blank"]
  },
  nombre: String,
  apellido: String,
  dni: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 8,
    unique: true,
  },
  mail: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  image: String
});


// metodos
const TeachersModel = mongoose.model("teachers", TeachersSchema);

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const respuesta = await TeachersModel.findById(id);
    res.json({ mensaje: "teacher", teacher: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});


// registrar teacher
router.post("/registrar", async (req, res) => {
   console.log("entrando a registrar");
   
  const teacherNuevo = {
    _id: new ObjectID(),
    usuario:req.body.usuario,
    contrasena:req.body.contrasena,
    nombre: req.body.nombre || null,
    apellido: req.body.apellido || null,
    dni: req.body.dni,
    mail: req.body.mail,
  };

teacherNuevo.contrasena = encriptarPassWord(req.body.contrasena);
console.log(teacherNuevo.contrasena);


try {
  const user = new TeachersModel(teacherNuevo);
    const respuesta = await user.save();
    res.json({
      mensaje: "teacher registrado correctamente",
      documento: respuesta,
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ mensaje: "error al crear teacher", tipo: error });
  }
});




// logear teacher
router.post("/login", async (req, res) => {
  try {
    const {usuario,contrasena}= req.body;
    const doc = await TeachersModel.find({usuario});
    const hashDb = doc[0].contrasena;
    const esContrasenaCorrecta = compararPassword(contrasena, hashDb)
   
    if (esContrasenaCorrecta) {
      res.json({mensaje: "ingresado correctamente", respuesta: doc})
    }else {
      res.status(401).json({ mensaje: "contraseña incorrecta" });
    }

  } catch (error) {
    res.status(500).json({ mensaje: "error al conectar teacher", tipo: error });
  }
});




router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const informacionModificadas = req.body;
  try {
    const respuesta = await TeachersModel.findByIdAndUpdate(
      id,
      informacionModificadas
    );
    res.json({ mensaje: "informacion modificada", informacion: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "error", tipo: error });
  }
});

module.exports = router;
