import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import style from './setmeetings.module.css'
import Customform from '../customform/customform';
import Duration from '../durations/duration';
import Time from '../time/time'
import Joi from '@hapi/joi'
import { useDispatch,useSelector } from 'react-redux'




export default function Setmeetings() {

    const state = useSelector((state)=>{
        return state
    })

    const schema = Joi.object().keys({
        to: Joi.string().required(),
        location: Joi.string().required(),
        subject: Joi.string().required(),
        timestart: Joi.required(),
        amountTime: Joi.number().required()
    })


    const handleClick = (data) => {
        //console.log(8);
        
        const { error, value } = schema.validate(state)
        if (error) {
            alert('hey fond error')
            console.log(error);
            
        } else {
            //////submit data with axios
        };





    }
    return (
        <div className={style.page}>
            <FontAwesomeIcon icon={faStopwatch} />
            <h5>Set up meeting</h5>
            <h6>We'll email your coleuges and remind them <br></br> when is closer to time</h6>
            <Customform></Customform>
            <Duration></Duration>
            <Time></Time>

            <button className={style.sendmetoheaven} onClick={handleClick}>Send invite</button>
        </div>
    )
}
