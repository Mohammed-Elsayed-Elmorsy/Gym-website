import { plansData } from '../../data/plansData'
import './Plans.css'
import img from '../../assets/whiteTick.png'
import { useState } from 'react'
const Plans = () => {
    const [id, setId] = useState(1)
    function changeActive(id) {
        setId(id)
    }
    return (
        <div className='plans'>
            <h2 className=''>
                <span className=' stroke'>Ready to start</span>
                <span style={{ color: 'white', margin: '0 7px' }}>Your Plan</span>
                <span className='stroke'>With Us</span>
            </h2>
            <div className='plans-content'>
                {plansData.map(plan => {
                    return (
                        <div onClick={() => changeActive(plan.id)} key={plan.name} className={plan.id === id ? 'active' : ''}>
                            {plan.icon}
                            <h3>{plan.name}</h3>
                            <span >{plan.price}$</span>
                            {plan.features.map(i => {
                                return (
                                    <p key={i[0]}>
                                        <img src={img} alt="" />
                                        {i}
                                    </p>
                                )
                            })}
                            <button>Join Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Plans