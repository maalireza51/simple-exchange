import React from 'react'
import MySelect from '../../components/mySelect';
import MyInput from '../../components/myInput';
import Loading from '../../pages/loading/Loading';
import { useAuthDispatch, useAuthState } from '../../context/auth-context';
import { actiontypes } from '../../context/reducer';
import { get } from '../../services/HttpClient';

export default function Convert({handleBack}) {

  const { loading, convert, currencies, To, From, amount } = useAuthState();
  const dispatch = useAuthDispatch();

  const convertForm = (e) => {
    e.preventDefault()
    dispatch({ type: actiontypes.LOADING })
    
    get('convert', {
      to: To,
      from: From,
      amount: amount
    })
      .then(response => {
        dispatch({
          type: actiontypes.GET_CONVERT,
          payload: {
            convert: response.result
          }
        })
      })
  }

  return (
    <>
      {loading ? <Loading/> :
        <>
          <form onSubmit={convertForm}>
            <div className='header'>Convert <span onClick={()=>handleBack("menu")}>Back</span></div>
            <div className='input'>
              <MySelect options={currencies} status="From" dispatch={dispatch}/>
            </div>
            <div className='input'>
              <MySelect options={currencies} status="To" dispatch={dispatch}/>
            </div>
            <div className='input'>
              <MyInput type="text" name="amount" placeholder="amount: (ex: 20)" />
            </div>
            <div className='input'>
              <input type="submit" className='button' value="Convert" />
            </div>
          </form>
        </>
      }
    </>
  )
}
