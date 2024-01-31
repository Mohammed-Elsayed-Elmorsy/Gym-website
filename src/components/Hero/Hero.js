import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './Hero.css'
import image1 from '../../assets/hero_image.png'
import image2 from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
const Hero = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)
    const [count3, setCount3] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (count < 50) {
                setCount(count + 2)
            }
        }, 50)
        return
    }, [count])
    useEffect(() => {
        setTimeout(() => {
            if (count2 < 750) {
                setCount2(count2 + 19)
            }
        }, 50)
        return
    }, [count2])
    useEffect(() => {
        setTimeout(() => {
            if (count3 < 150) {
                setCount3(count3 + 7)
            }
        }, 50)
        return
    }, [count3])
    return (
        <div className='hero'>
            <div className="left-hero">
                <Header />
                <div className=' best-ad'>
                    <span>The Best Fitness Club in The Town</span>
                    <div></div>
                </div>
                <div className=' hero-text'>
                    <div>
                        <span className=' stroke'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div>Ideal Body</div>
                </div>
                <p>In here we will help you to shape and build your ideal body and live up your life to fullest
                </p>
                <div className='statics'>
                    <div>
                        <h2>+ {count3}</h2>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <h2>+ {count2}</h2>
                        <span>MEMBERS JOINED
                        </span>
                    </div>
                    <div>
                        <h2>+ {count}
                        </h2>
                        <span>FITNESS PROGRAMS
                        </span>
                    </div>
                </div>
                <div className=' btns'>
                    <button >Get Started</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="right-hero">
                <img className='image spare-image' src={image2} alt="" />
                <img className='image person-image' src={image1} alt="" />
                <button >Join Now</button>
                <div>
                    <img className='image-heart' src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>120b/m</span>
                </div>
                <div className=' calories'>
                    <img src={calories} alt="" className=' calories-image' />
                    <div>
                        <span>Calories Burnt</span>
                        <span>1770cal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero