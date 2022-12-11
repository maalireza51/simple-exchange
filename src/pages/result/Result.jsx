import React from 'react'
import { actiontypes } from '../../context/reducer'

export default function Result({ dispatch, result }) {
    const handleBack = () => {
        dispatch({
            type:actiontypes.GET_CONVERT,
            payload:{
                convert:null
            }
        })
    }

    return (
        <div className='result'>
            {result}
            <button onClick={handleBack}>Back To Menu</button>
        </div>
    )
}
