// @ts-check
import React from "react";
// @ts-ignore
import infoFau from '../../images/infoFau.jpeg'
import areaTecnica from '../../images/areatecnica.jpg'

export default function InfoFau() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 mt-16">
        <h4 className="text-center">FACULTAD DE ARQUITECTURA Y URBANISMO - UNT</h4>
        <br/>
      <p>
        Plan de Estudios 2008 (PE-08) aprobado en la FAU, plantea el desarrollo
        de la carrera, básicamente en tres ciclos o estadios formativos de
        grado:
      </p>
      <br />
      <p>1º Ciclo introductorio (propedéutico-holístico) </p>
      <p>2º Ciclo básico (analítico-conceptual) </p>
      <p>3º Ciclo superior (sintético-integrador). </p>
      <p>
        En ellos se definen cuatro áreas de conocimiento, conformando en su
        conjunto una trama estructural a fin de coordinar los objetivos y
        contenidos particulares de cada asignatura:
      </p>
      <br />
      <p>a- Comunicación y forma </p>
      <p>b- Proyecto y planeamiento </p>
      <p>c- Ciencias básicas, tecnología, producción y gestión</p>
      <p>d- Historia y teoría de la arquitectura</p>
      <br/>

      <div className="w-full mt-2 flex justify-center">
        <a href="https://www.fau.unt.edu.ar/wp-content/uploads/plan2008.pdf">
          <button className="bgyellow text-black font-bold p-2 rounded-md">
            DESCARGAR PLAN DE ESTUDIO
          </button>
        </a>
      </div>
<div className="w-full mt-6">
      <img src={infoFau} alt="plan de estudio"/>
</div>
<div className="w-full mt-6">
      <img src={areaTecnica} alt="area tecnica"/>
</div>
    </div>
      </div>
  );
}
