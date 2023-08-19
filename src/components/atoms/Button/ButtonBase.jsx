import React from 'react'

export default function ButtonBase({ addClass, children }) {
    return (
        <button className={`btn bg-cream fw-semibold text-dark shadow-none font-poppins ${addClass}`}>
            {children}
        </button>
    )
}
