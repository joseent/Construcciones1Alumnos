//@ts-check
import React from 'react'
import InformationList from '../../components/information/InformationList'
import NavBar from '../../components/general/navBar/NavBar'

export default function Info() {
    return (
        <div>
            <NavBar/>
            <h1>ESTAMOS EN INFO</h1>
            <InformationList/>
        </div>
    )
}
