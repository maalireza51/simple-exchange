import React from 'react'
import { actiontypes } from '../../context/reducer'

export default function MySelect({ dispatch, options, status }) {
    const handleSelect = (e) =>{
        dispatch({
            type:actiontypes.TEXT_INPUT,
            payload:{
                key: status,
                value: e.target.value
            }
        })
    }

    return (
        <select name="convertFrom" id="convertFrom" onChange={handleSelect}>
            <option value="">{status}</option>
            {options?.map((option, index) => (<option value={option} key={index}>{option}</option >))}
        </select>
    )
}
