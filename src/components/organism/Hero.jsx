import React from 'react'
import ButtonShopNow from '../molecules/ButtonShopNow'
import ImgHero from '../molecules/ImgHero'

export default function Hero() {
    return (
        <div className='row' style={{ marginTop: 120 }}>
            <ImgHero addClass={'d-block d-lg-none'} />
            <div className='col-12 col-lg-7 d-flex align-items-center mb-5'>
                <div>
                    <div>
                        <h2 className='font-lora fw-semibold mb-3'>Discover the Latest Fashion Trends</h2>
                        <span className='font-lora' style={{ textShadow: "0px 6px 5px silver" }}>From stylish dresses to trendy tops and must-have accessories, we have everything you need to stay on top of the latest fashion trends. Our expertly curated collection features the hottest styles from top designers, so you can always find the perfect look for any occasion. Shop now and discover your new favorite fashion pieces.</span>
                    </div>
                    <ButtonShopNow />
                </div>
            </div>
            <ImgHero addClass={'d-none d-lg-block'} />
        </div>
    )
}
