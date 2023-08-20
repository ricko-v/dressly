import React from 'react'
import Image from '../atoms/Image'

export default function TopSelection({ src, text }) {
    return (
        <div className='position-relative'>
            <a href="#">
                <Image width={'100%'} height={'100%'} src={src} className='img-fluid' alt="thumb" />
                <div className='position-absolute top-0 bg-transparent-50 h-100 w-100 d-flex justify-content-center'>
                    <b className='text-white fw-semibold position-absolute' style={{ bottom: 30 }}>{text}</b>
                </div>
            </a>
        </div>
    )
}
