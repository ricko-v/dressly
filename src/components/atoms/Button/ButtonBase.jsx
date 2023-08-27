import React from 'react'

export default function ButtonBase({ addClass, children }) {
    return (
        <button name='dressly-btn' className={`btn bg-cream fw-semibold text-dark shadow-none font-poppins ${addClass}`}>
            {children}
        </button>
    )
}
