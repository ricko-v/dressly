import React from 'react'
import img from '../../assets/img/img-hero.webp'
import Image from '../atoms/Image'

export default function ImgHero({ addClass }) {
    return (
        <>
            <div className={`col-12 col-lg-5 mb-5 ${addClass}`}>
                <Image width={'100%'} height={'100%'} src={img} className='img-fluid' alt="hero-img" />
            </div>
        </>
    )
}
