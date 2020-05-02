//@ts-check
import React from 'react'
import InformationList from '../../components/information/InformationList'
import NavBarTeachers from '../../components/general/navBar/NavBarTeachers'

export default function InfoTeachers() {
    return (
        <div>
            <NavBarTeachers/>
            <h1>ESTAMOS EN INFO</h1>
            <InformationList/>
        </div>
    )
}
