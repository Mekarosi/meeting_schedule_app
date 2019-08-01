import React from 'react'
import Form from 'react-bootstrap/Form'
import style from './customform.module.css'
import edit from '../redux/reducers'
import {useDispatch} from 'react-redux'

export default function Customform() {
    const dispatch = useDispatch()
    const handleChange = (data) => {
        const id = data.target.id
        const value = data.target.value

        
        const payload ={

        }

        payload[id]= value
        dispatch(edit(payload))

    }
    return (
        <div className={style.page}>
            <Form>
                <Form.Control id='to' onChange={e => {
                    handleChange(e)
                }} placeholder="To:" />
                <Form.Control id='subject' onChange={e => {
                    handleChange(e)
                }} placeholder="Subject" />
                <Form.Control id='location' onChange={e => {
                    handleChange(e)
                }} placeholder="Location" />
            </Form>
        </div>
    )
}
