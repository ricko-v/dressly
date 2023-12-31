import React from 'react'
import logo from '../../assets/img/logo.webp'
import Search from '../atoms/Icons/Search'
import Account from '../atoms/Icons/Account'
import Bag from '../atoms/Icons/Bag'
import Toogle from '../atoms/Icons/Toogle'
import ButtonBase from '../atoms/Button/ButtonBase'
import Image from '../atoms/Image'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm" style={{ zIndex: 99999 }}>
            <div className="container d-flex justify-content-between">
                <button name='dressly-btn' className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Toogle width={20} height={20} />
                </button>
                <a className="navbar-brand" href="#">
                    <Image src={logo} alt="Logo Dressly" width={100} height={25} />
                </a>
                <button name='dressly-btn' className="d-block d-md-none btn bg-transparent shadow-none border-0">
                    <Bag width={20} height={20} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
                        <li className="nav-item">
                            <a className="nav-link fw-bold font-poppins text-dark" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold font-poppins text-dark" href="#">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold font-poppins text-dark" href="#">Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold font-poppins text-dark" href="#">Blog</a>
                        </li>
                    </ul>
                    <div className='d-none d-lg-flex gap-3'>
                        <a href='#'>
                            <Search width={20} />
                        </a>
                        <a href='#'>
                            <Bag width={20} />
                        </a>
                        <a href='#'>
                            <Account width={20} />
                        </a>
                    </div>
                    <div className='d-flex d-lg-none gap-2'>
                        <ButtonBase addClass={'w-50'}>Masuk</ButtonBase>
                        <ButtonBase addClass={'bg-cream-soft w-50'}>Daftar</ButtonBase>
                    </div>
                </div>
            </div>
        </nav>
    )
}
