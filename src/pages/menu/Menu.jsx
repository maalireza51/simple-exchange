import React, { useState } from 'react'
import Convert from '../convert/Convert'

export default function Menu({handleClick}) {
    return (
        <ul className='menu'>
            <small>active features</small>
            <li onClick={()=>handleClick("convert")}>Convert</li>
            <small>in the future</small>
            <li onClick={()=>handleClick("change")} className="disabled">Change</li>
            <li onClick={()=>handleClick("change")} className="disabled">Change</li>
            <li onClick={()=>handleClick("change")} className="disabled">Change</li>
        </ul>
    )
}
