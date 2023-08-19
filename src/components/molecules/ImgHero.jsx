import React from 'react'
import img from '../../assets/img/img-hero.png'

export default function ImgHero({ addClass }) {
    return (
        <>
            <div className={`col-12 col-lg-5 mb-5 ${addClass}`}>
                <img src={img} className='img-fluid' />
            </div>
        </>
    )
}
