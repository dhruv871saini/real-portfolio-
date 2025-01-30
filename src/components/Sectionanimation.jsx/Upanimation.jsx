import React from 'react'
import { useInView } from 'react-intersection-observer'

const Upanimation = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    }) 

    return (
        <div 
            ref={ref}
            className={`animated-section-up ${inView ? 'in-view' : ''}`}>
            {children}
        </div>
    )
}

export default Upanimation
