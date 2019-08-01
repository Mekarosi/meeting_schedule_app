import React from 'react'
import mess from './meetings.module.css'

export default function Meetings() {

    const images = [
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
          ]

    return (
        <div className={mess.page} >
            <div className={mess.up}>
                <section>Urgent</section>
                <p>10:30-11:30</p>
                <h4> Meeting with Tom </h4>
                <h5>View agenda</h5>
            </div>
            <div className={mess.down}>
                { images.map((image)=>{
                    return (<img src={image} ></img>)
                }) }
            </div>
        </div>
    )
}
