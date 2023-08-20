import React from 'react'
import Brand from '../molecules/Brand'
import Berluti from '../../assets/img/berluti.webp'
import Balenciaga from '../../assets/img/balenciaga.webp'
import Gucci from '../../assets/img/gucci.webp'
import Jimmy from '../../assets/img/jimmy.webp'
import Louis from '../../assets/img/louis.webp'
import Burberry from '../../assets/img/burberry.webp'

export default function ListBrand() {
    return (
        <div className='d-flex justify-content-around flex-wrap'>
            <Brand src={Berluti} />
            <Brand src={Balenciaga} />
            <Brand src={Gucci} />
            <Brand src={Jimmy} />
            <Brand src={Burberry} />
            <Brand src={Louis} />
        </div>
    )
}
