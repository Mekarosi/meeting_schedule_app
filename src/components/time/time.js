import React from 'react'
import style from './time.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateTimePicker from 'react-datetime-picker';
import edit from '../redux/reducers'
import { useDispatch } from 'react-redux'

export default function Time() {
const dispatch = useDispatch()


const onChange = (value) =>{

    const payload = {
        timestart:value
    }

    dispatch(edit(payload))
}


    return (
        <div className={style.page}>
            <h3>Time</h3>
            <Row>
                <Col>
                    <label>From</label>
                    <DateTimePicker className={style.picker}
                        onChange={value =>{
                            onChange(value)
                        }}
                        value={new Date()}
                    />

                </Col>
               
            </Row>
        </div>
    )
}
