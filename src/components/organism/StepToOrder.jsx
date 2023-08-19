import React from 'react'

export default function StepToOrder() {
    return (
        <div style={{ borderRadius: 16 }} className='bg-cream-soft p-3 py-4 p-md-5 mb-5 pb-4'>
            <h2 className='font-lora text-center fw-semibold'>The Easy Way to Order</h2>

            <div className='stepper mt-4 pt-3'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 justify-content-center d-flex'>
                        <div className='d-block d-lg-flex'>
                            <div style={{ width: 150 }} className='d-flex d-lg-block align-items-center mb-4 position-relative gap-2'>
                                <div className='d-flex justify-content-center mb-3'>
                                    <div className='rounded-circle bg-cream-more-soft d-flex justify-content-center align-items-center' style={{ width: 30, height: 30, zIndex: 9999 }}>
                                        <b className='font-ubuntu'>1</b>
                                    </div>
                                </div>
                                <p className='font-ubuntu text-center'>Select Product</p>
                                <div style={{ width: 75, marginLeft: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                                <div style={{ width: 75, marginLeft: -23, marginTop: 25, transform: 'rotate(90deg)', top: 14, height: 2 }} className='position-absolute bg-cream-dark d-block d-lg-none'></div>
                            </div>
                            <div style={{ width: 150 }} className='d-flex d-lg-block align-items-center mb-4 position-relative gap-2'>
                                <div className='d-flex justify-content-center mb-3'>
                                    <div className='rounded-circle bg-cream-more-soft d-flex justify-content-center align-items-center' style={{ width: 30, height: 30, zIndex: 9999 }}>
                                        <b className='font-ubuntu'>2</b>
                                    </div>
                                </div>
                                <p className='font-ubuntu text-center'>Login/Register</p>
                                <div style={{ width: 75, marginRight: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                                <div style={{ width: 75, marginLeft: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                                <div style={{ width: 75, marginLeft: -23, marginTop: 25, transform: 'rotate(90deg)', top: 14, height: 2 }} className='position-absolute bg-cream-dark d-block d-lg-none'></div>
                            </div>
                            <div style={{ width: 150 }} className='d-flex d-lg-block align-items-center  mb-4 position-relative gap-2'>
                                <div className='d-flex justify-content-center mb-3'>
                                    <div className='rounded-circle bg-cream-more-soft d-flex justify-content-center align-items-center' style={{ width: 30, height: 30, zIndex: 999 }}>
                                        <b className='font-ubuntu'>3</b>
                                    </div>
                                </div>
                                <p className='font-ubuntu text-center'>Shopping Bag</p>
                                <div style={{ width: 75, marginRight: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                                <div style={{ width: 75, marginLeft: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                                <div style={{ width: 75, marginLeft: -23, marginTop: 25, transform: 'rotate(90deg)', top: 14, height: 2 }} className='position-absolute bg-cream-dark d-block d-lg-none'></div>
                            </div>
                            <div style={{ width: 150 }} className='d-flex d-lg-block align-items-center mb-4 position-relative gap-2'>
                                <div className='d-flex justify-content-center mb-3'>
                                    <div className='rounded-circle bg-cream-more-soft d-flex justify-content-center align-items-center' style={{ width: 30, height: 30, zIndex: 999 }}>
                                        <b className='font-ubuntu'>4</b>
                                    </div>
                                </div>
                                <p className='font-ubuntu text-center'>Payment</p>
                                <div style={{ width: 75, marginRight: 75, top: 14, height: 2 }} className='position-absolute d-none d-lg-block bg-cream-dark'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
