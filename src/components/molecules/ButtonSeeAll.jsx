import React from 'react'
import ButtonBase from '../atoms/Button/ButtonBase'

function ButtonSeeAll() {
    return (
        <>
            <ButtonBase addClass={'d-none d-md-block'}>See All</ButtonBase>
            <a href='#' className='d-flex d-md-none align-items-center text-cream'>
                <b>See All</b>
            </a>
        </>
    )
}

export default ButtonSeeAll