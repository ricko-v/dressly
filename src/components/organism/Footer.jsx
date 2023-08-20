import React from 'react'
import logo from '../../assets/img/logo.webp'
import AppStore from '../../assets/img/appstore.webp'
import PlayStore from '../../assets/img/playstore.webp'

export default function Footer() {
    return (
        <div className='row mb-3 justify-content-center'>
            <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo Dressly" width={100} />
                </a>
                <div className='mt-3'>
                    <p className='font-ubuntu'>We are an online fashion store that provides a variety of the latest and trendy fashion products for men and women. We always try to provide our customers with a pleasant and easy shopping experience.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-1'>
                <div className='row'>
                    <div className='col-12 col-md-7 mb-3'>
                        <h5>Product Category</h5>

                        <div className='mt-3'>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Women's clothing</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Menswear</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Accessories</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Shoes</p>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 mb-3'>
                        <h5>Company</h5>

                        <div className='mt-3'>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>About</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Contact</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Privacy Policy</p>
                            </a>
                            <a href="#" className='text-dark'>
                                <p className='mb-2'>Terms of Service</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <h5>Download Our App</h5>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <a href="#">
                            <img width={'100%'} height={'100%'} src={AppStore} className='img-fluid' alt="appstore" />
                        </a>
                    </div>
                    <div className='col-6'>
                        <a href="#">
                            <img width={'100%'} height={'100%'} src={PlayStore} className='img-fluid' alt="playstore" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
