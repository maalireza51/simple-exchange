import { useEffect } from 'react';
import './App.css';
import { useAuthDispatch, useAuthState } from './context/auth-context';
import { actiontypes } from './context/reducer';
import Main from './pages/menu/Main';
import Result from './pages/result/Result';
import { get } from './services/HttpClient';

function App() {

  const { convert } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    get('list').then(response => {
      dispatch({
        type: actiontypes.GET_LIST,
        payload: {
          currencies: Object.keys(response.currencies)
        }
      })
    })
  }, [dispatch])


  return (
    <div className="App">
      <div className='Card'>
        {convert ? <Result result={convert} dispatch={dispatch}/> : <Main/>}
      </div>
    </div>
  );
}

export default App;
