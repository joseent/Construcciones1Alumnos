//@ts-check
import React from 'react'
import NavBarTeachers from '../../components/general/navBar/NavBarTeachers'
import NewInfo from '../../pages/infoRelated/NewInfo'
import InformationListTeachers from '../../components/information/InformationListTeachers'

export default function InfoTeachers() {
    return (
        <div>
            <NavBarTeachers/>
            <h4 className="text-center mb-6 font-bold">GESTOR DE INFORMACION</h4>
            <NewInfo/>
            <InformationListTeachers/>
        </div>
    )
}
