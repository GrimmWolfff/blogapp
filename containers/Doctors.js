import React from 'react'
import Doctor from '../components/Doctor'

function Doctors() {    
    return (
        <div className="mt-[68px] flex flex-col doctors w-1/3">
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
        </div>
    )
}

export default Doctors
