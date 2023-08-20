import React from 'react'
import TopSelection from '../molecules/TopSelection'
import Eid from '../../assets/img/eid-selection.webp'
import Shoes from '../../assets/img/shoes-selection.webp'
import Accessory from '../../assets/img/accessory-selection.webp'

function ListTopSelection() {
    return (
        <div className='mt-5'>
            <h3 className='font-lora fw-semibold mb-3'>Top Selections</h3>

            <div className='row'>
                <div className='col-12 col-md-4 mb-3'>
                    <TopSelection src={Eid} text={"Elegant Eid Attire"} />
                </div>
                <div className='col-12 col-md-4 mb-3'>
                    <TopSelection src={Accessory} text={"Accessory Essentials"} />
                </div>
                <div className='col-12 col-md-4 mb-3'>
                    <TopSelection src={Shoes} text={'Everyday Shoes'} />
                </div>
            </div>
        </div>
    )
}

export default ListTopSelection