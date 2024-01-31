import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
const Programs = () => {
    return (
        <div >
            <h2 className='text'>Our <span className=' stroke'>Programs</span> To <span className='stroke'>Shape</span> You</h2>
            <div className=' progs'>
                {programsData.map(item => {
                    return (
                        <div key={item.heading}>
                            {item.image}
                            <h2>{item.heading}</h2>
                            <p>{item.details}</p>
                            <button>
                                Join Now
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Programs