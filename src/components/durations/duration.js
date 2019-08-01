import React, {useState} from 'react'
import style from './duration.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import edit from '../redux/reducers'
import {useDispatch} from 'react-redux'




export default function Duration() {

    const dispatch = useDispatch()

    const durations = [
        {
            amountTime: 30,
            display: '30 minutes',
            active: true
        },
        {
            amountTime: 45,
            display: '45 minutes',
            active: false
        },
        {
            amountTime: 60,
            display: '1 hour',
            active: false
        },
        {
            amountTime: 90,
            display: '1.5 hours',
            active: false
        }, {
            amountTime: 120,
            display: '2 hours',
            active: false
        }, {
            amountTime: 150,
            display: '2.5 hours',
            active: false
        }, {
            amountTime: 180,
            display: '3 hours',
            active: false
        }, {
            amountTime: 210,
            display: '3.5 hours',
            active: false
        }, {
            amountTime: 240,
            display: '4 hours',
            active: false
        }, {
            amountTime: 270,
            display: '4.5 hours',
            active: false
        }, {
            amountTime: 300,
            display: '5 hours',
            active: false
        }, {
            amountTime: 720,
            display: 'All day',
            active: false
        }

    ]

    const [dura,setDurations] = useState(durations)

    const handleclick = (id) =>{
        const payload = {
            amountTime:id
        }
        

        dispatch(edit(payload))
        
        const newA = []
        for (let i=0; i < dura.length; i++){
            const element = dura[i];
            element.active = false

            if (element.amountTime === id){
                element.active = true
            }

            newA.push(element)
           }
            setDurations(newA)
        }
       
    
    return (
        <div className={style.page}>

            <h3>Duration</h3>
            

            <Row>
                {dura.map((x) => {
                    return (
                        <Col className={style.col} xs={3}>
                            <button onClick={() =>{
                              handleclick(x.amountTime)
                              }} className={x.active ? style.activeduration : style.nactiveduration}><p>{x.display}</p></button>
                        </Col>
                    )
                })}
            </Row>

        </div>
    )
}
