import React, {useEffect, useState, useContext} from 'react'
import map from '../static/map.jpg'
import '/src/static/app.css'
import { PageProvider } from '../context/PageContext'
import { usePage } from '../context/PageContext'


function Map() {

    return (
        <>
        <img src={map} style={{height: 500, width: 700, objectFit: 'cover', objectPosition: 'center'}} ></img>
        </>
    )
}

export default Map;