import React from 'react'

export default function Brand({ src }) {
    return (
        <div>
            <a href="#">
                <img src={src} style={{ width: 150 }} />
            </a>
        </div>
    )
}
