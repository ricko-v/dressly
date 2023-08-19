import React from 'react'

export default function TopSelection({ src, text }) {
    return (
        <div className='position-relative'>
            <a href="#">
                <img src={src} className='img-fluid' />
                <div className='position-absolute top-0 bg-transparent-50 h-100 w-100 d-flex justify-content-center'>
                    <b className='text-white fw-semibold position-absolute' style={{ bottom: 30 }}>{text}</b>
                </div>
            </a>
        </div>
    )
}
