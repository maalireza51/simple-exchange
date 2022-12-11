import React from 'react'
import { useAuthState, useAuthDispatch } from '../../context/auth-context'
import { actiontypes } from '../../context/reducer'

export default function MyInput({ name ,type, placeholder }) {
    const { amount } = useAuthState()
    const dispatch = useAuthDispatch()
    const changeValue = (e) => {
        dispatch({
            type: actiontypes.TEXT_INPUT,
            payload: {
                key: name,
                value: e.target.value
            }
        })
    }

    return (
        <input type={type} placeholder={placeholder} value={amount} onChange={changeValue} />
    )
}
