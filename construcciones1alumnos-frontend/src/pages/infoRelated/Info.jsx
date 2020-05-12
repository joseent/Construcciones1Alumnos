//@ts-check
import React from 'react'
import InformationList from '../../components/information/InformationList'
import NavBar from '../../components/general/navBar/NavBar'

export default function Info() {
    return (
        <div>
            <NavBar/>
            <h4 className="text-center mb-6">ULTIMA INFORMACION</h4>
            <InformationList/>
        </div>
    )
}
