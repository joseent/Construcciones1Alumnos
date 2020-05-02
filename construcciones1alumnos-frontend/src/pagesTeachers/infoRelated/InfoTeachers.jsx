//@ts-check
import React from 'react'
import NavBarTeachers from '../../components/general/navBar/NavBarTeachers'
import NewInfo from '../../pages/infoRelated/NewInfo'
import InformationListTeachers from '../../components/information/InformationListTeachers'

export default function InfoTeachers() {
    return (
        <div>
            <NavBarTeachers/>
            <h1>ESTAMOS EN INFO</h1>
            <NewInfo/>
            <InformationListTeachers/>
        </div>
    )
}
