import React from 'react'

export default function Brand({ src }) {
    return (
        <div>
            <a href="#">
                <img width={'100%'} height={'100%'} src={src} style={{ width: 150 }} alt="thumb" />
            </a>
        </div>
    )
}
