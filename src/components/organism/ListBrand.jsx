import React from 'react'
import Brand from '../molecules/Brand'
import Berluti from '../../assets/img/berluti.png'
import Balenciaga from '../../assets/img/balenciaga.png'
import Gucci from '../../assets/img/gucci.png'
import Jimmy from '../../assets/img/jimmy.png'
import Louis from '../../assets/img/louis.png'
import Burberry from '../../assets/img/burberry.png'

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
