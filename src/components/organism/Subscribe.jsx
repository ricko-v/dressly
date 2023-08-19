import React from 'react'
import ButtonBase from '../atoms/Button/ButtonBase'
import Send from '../atoms/Icons/Send'

export default function Subscribe() {
    return (
        <div className='mb-5 pb-3 mt-5 pb-5 pt-5'>
            <h2 className='font-lora text-center fw-semibold mb-3'>Subscribe Our Newsletter</h2>

            <form className='d-flex justify-content-center gap-3'>
                <input required className={`form-control shadow-none font-ubuntu ${window.innerWidth < 768 ? 'w-100' : 'w-75'}`} placeholder='Type your mail' />
                <ButtonBase>
                    <Send width={20} height={20} />
                </ButtonBase>
            </form>
        </div>
    )
}
