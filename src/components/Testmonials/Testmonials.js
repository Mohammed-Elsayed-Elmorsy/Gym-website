import { testimonialsData } from '../../data/testimonialsData'
import './Testmonials.css'
import prev from '../../assets/leftArrow.png'
import next from '../../assets/rightArrow.png'
import { useState } from 'react'
import { motion } from "framer-motion"
const Testmonials = () => {
    const [selected, setSelected] = useState(0)
    function increaseSlider() {
        if (selected === testimonialsData.length - 1) {
            setSelected(0)
        } else {
            setSelected(selected + 1)
        }
    }
    function decreaseSlider() {
        if (selected === 0) {
            setSelected(testimonialsData.length - 1)
        } else {
            setSelected(selected - 1)
        }
    }
    return (
        <div className='Testmonials'>
            <div className="left">
                <span style={{ color: 'orange', fontSize: '22px' }}>Testmonials </span>
                <h2 className=''> <span className=' stroke'>WHAT THEY</span> Say about us</h2>
                <div>
                    <motion.p
                        key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: 'spring', duration: 1.7 }}
                    >
                        {testimonialsData[selected].review}
                    </motion.p>
                    <span style={{ color: 'orange' }}>{testimonialsData[selected].name}</span>
                    <span> - {testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className='controls'>
                <span><img onClick={() => increaseSlider()} src={prev} alt="" /></span>
                <span><img onClick={() => decreaseSlider()} src={next} alt="" /></span>
            </div>
            <div className="right" >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }}
                    className='after'>
                </motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ type: 'spring', duration: 1.7 }}
                    src={testimonialsData[selected].image} alt="" />
                <motion.div className='before'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }}
                ></motion.div>
            </div>
        </div >
    )
}

export default Testmonials