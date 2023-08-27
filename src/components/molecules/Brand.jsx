import React from 'react'
import Image from '../atoms/Image'

export default function Brand({ src }) {
    return (
        <div>
            <a href="#" key={src}>
                <Image width={150} height={'100%'} src={src} alt="thumb" />
            </a>
        </div>
    )
}
