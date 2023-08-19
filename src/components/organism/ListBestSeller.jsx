import React, { useEffect } from 'react'
import BestSeller from '../molecules/BestSeller'
import Sneaker from '../../assets/img/sneaker-bestseller.png'
import Women from '../../assets/img/women-bestseller.png'
import Men from '../../assets/img/men-bestseller.png'
import Bag from '../../assets/img/bag-bestseller.png'
import ButtonSeeAll from '../molecules/ButtonSeeAll'

export default function ListBestSeller() {
    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container');

        Object.assign(swiperEl, {
            injectStyles: [
                `
        .swiper-wrapper {
          padding-bottom: 40px;
        }
        `,
            ],
            pagination: {
                clickable: true,
                dynamicBullets: true,
            },
            autoplay: {
                delay: 3000
            },
            breakpoints: {
                10: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    loop: true
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: true
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    loop: true
                },
            },
        });

        swiperEl.initialize();
    }, []);
    return (
        <div className='my-5 pt-5'>
            <div className='d-flex justify-content-between mb-4'>
                <h2 className='font-lora fw-semibold m-0'>Bestsellers</h2>

                <ButtonSeeAll />
            </div>
            <swiper-container init="false">
                <swiper-slide>
                    <BestSeller src={Sneaker} text={'Sneaker'} n={325} rating={'4.5'} price={'965.500'} discount={'1.097.500'} />
                </swiper-slide>
                <swiper-slide>
                    <BestSeller src={Women} text={"Women's Robes"} n={325} rating={'4.5'} price={''} discount={'755.000'} />
                </swiper-slide>
                <swiper-slide>
                    <BestSeller src={Bag} text={'Bag'} n={325} rating={'4.5'} price={'920.500'} discount={'1.000.500'} />
                </swiper-slide>
                <swiper-slide>
                    <BestSeller src={Men} text={"Men's Robes"} n={325} rating={'4.5'} price={''} discount={'650.000'} />
                </swiper-slide>
            </swiper-container>
        </div>
    )
}
