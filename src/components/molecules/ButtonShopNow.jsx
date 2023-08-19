import React from 'react'
import ButtonBase from '../atoms/Button/ButtonBase'

function ButtonShopNow() {
    return (
        <>
            <ButtonBase addClass={'d-none d-lg-block mt-4 w-200'}>Shop Now</ButtonBase>
            <ButtonBase addClass={'w-100 d-block d-lg-none mt-4'}>Shop Now</ButtonBase>
        </>
    )
}

export default ButtonShopNow