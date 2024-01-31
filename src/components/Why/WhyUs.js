import React from 'react'
import './Why.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/tick.png'
import img_brand1 from '../../assets/nike.png'
import img_brand2 from '../../assets/adidas.png'
import img_brand3 from '../../assets/nb.png'

const WhyUs = () => {
    return (
        <div className='why'>
            <div className='left remove-in-small'>
                <div><img src={image1} alt="" /></div>
                <div><img src={image2} alt="" /></div>
                <div><img src={image3} alt="" /></div>
                <div><img src={image4} alt="" /></div>
            </div>
            <div className='right'>
                <span style={{ color: 'orange', fontSize: '22px' }}> Some Reasons</span>
                <h2 className=''>Why <span className=' stroke'>Choose</span> Us</h2>
                <ul>
                    <li>
                        <img src={image5} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </li>
                    <li>
                        <img src={image5} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </li>
                    <li>
                        <img src={image5} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </li>
                    <li>
                        <img src={image5} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </li>
                </ul>
                <div>
                    <span style={{ color: 'gray', fontSize: '22px', display: 'block', margin: '10px 0' }}>Our Partners</span>
                    <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
                        <img src={img_brand1} alt="" />
                        <img src={img_brand2} alt="" />
                        <img src={img_brand3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs