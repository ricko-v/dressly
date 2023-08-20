import React from 'react'
import Star from '../atoms/Icons/Star'

export default function BestSeller({ src, text, rating, n, price, discount }) {
    return (
        <a href='#'>
            <div className='card'>
                <div className='card-body'>
                    <img width={'100%'} height={'100%'} src={src} className='img-fluid' alt="thumb" />

                    <div className='my-2'>
                        <b className='font-ubuntu'>{text}</b>
                    </div>

                    <div className='d-flex align-items-center gap-2'>
                        <Star width={20} height={20} />

                        <div>
                            <span>{rating}</span>
                            &nbsp;
                            <span className='text-secondary'>({n})</span>
                        </div>
                    </div>

                    <div className='d-flex mt-2'>
                        {
                            discount &&
                            <span className='font-ubuntu'>Rp. {discount}</span>
                        }
                        &nbsp;
                        {
                            price &&
                            <small className='text-danger font-ubuntu'><s>Rp. {price}</s></small>
                        }
                    </div>
                </div>
            </div>
        </a>
    )
}
