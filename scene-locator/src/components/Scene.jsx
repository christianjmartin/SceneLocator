import React, {useEffect, useState, useContext} from 'react'
import ghostProtocol from '/src/static/ghostprotocol.jpg'
import harryPotter from '/src/static/harrypotter.jpg.webp'
import spiderman2 from '/src/static/spiderman.jpg'
import tdk from '/src/static/tdk.jpg.webp'
import '/src/static/app.css'
import { PageProvider } from '../context/PageContext'
import { usePage } from '../context/PageContext'


function Scene() {
    const [imgPath, setImgPath] = useState('');
    const {currQuiz, setCurrQuiz} = usePage();

    const chooseScene = (choice) => {
        switch(choice) {
            case 1:
                setImgPath(tdk)
                setCurrQuiz(1);
                break
            case 2:
                setImgPath(spiderman2)
                setCurrQuiz(2);
                break
            case 3:
                setImgPath(harryPotter)
                setCurrQuiz(3);
                break
            case 4:
                setImgPath(ghostProtocol)
                setCurrQuiz(4);
                break
            default: 
                setImgPath('')
                setCurrQuiz(0);
                break;
        }
    }

    return (
        <>
        <div className='quiz-button-container'>
            <button className='quiz-button' onClick={()=> chooseScene(1)}>Quiz 1</button>
            <button className='quiz-button' onClick={()=> chooseScene(2)}>Quiz 2</button>
            <button className='quiz-button' onClick={()=> chooseScene(3)}>Quiz 3</button>
            <button className='quiz-button' onClick={()=> chooseScene(4)}>Quiz 4</button>
        </div>
        <img src={imgPath} style={{height: 500, width: 700, objectFit: 'cover', objectPosition: 'center'}} ></img>
        <p>current quiz to solve: {currQuiz}</p>
        </>
    )
}

export default Scene;