import React from 'react'
import Image from '../atoms/Image'

export default function Brand({ src }) {
    return (
        <div>
            <a href="#">
                <Image width={'100%'} height={'100%'} src={src} style={{ width: 150 }} alt="thumb" />
            </a>
        </div>
    )
}
