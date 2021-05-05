import React from 'react';
import './App.css';
import { Step1 } from './ui/Step1';
import { Step2 } from './ui/Step2';
import { Step3 } from './ui/Step3';
import { Step4 } from './ui/Step4';
import { Step2ForGarage } from './ui/Step2ForGarage';
import { Step3ForGarage } from './ui/Step3ForGarage';
import { Result } from './ui/Result';
import { Error } from './ui/Error';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { dataResetAC } from './bll/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './bll/Store';
import { LinearProgress } from '@material-ui/core';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const startOver = () => {
    history.push('/step1');
    dispatch(dataResetAC());
  };
  let location = useLocation();
  const nextStep = () => {
    if (location.pathname === '/step1') {
      history.push('/step2');
    } else if (location.pathname === '/step2') {
      history.push('/step3');
    } else if (location.pathname === '/step3') {
      history.push('/step4');
    } else if (location.pathname === '/step2ForGarage') {
      history.push('/step3ForGarage');
    }
  };
  const status = useSelector<AppStateType, string>(state => state.app.status);
  return (
    <div className='App'>
      {status === 'loading' && <LinearProgress />}
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/step1'} />} />
        <Route exact path='/step1' render={() => <Step1 nextStep={nextStep} />} />
        <Route exact path='/step2' render={() => <Step2 nextStep={nextStep} startOver={startOver} />} />
        <Route exact path='/step3' render={() => <Step3 nextStep={nextStep} startOver={startOver} />} />
        <Route exact path='/step4' render={() => <Step4 startOver={startOver} />} />
        <Route exact path='/step2ForGarage' render={() => <Step2ForGarage nextStep={nextStep} startOver={startOver} />} />
        <Route exact path='/step3ForGarage' render={() => <Step3ForGarage startOver={startOver} />} />
        <Route exact path='/result' render={() => <Result startOver={startOver} />} />
        <Route exact path='/error' render={() => <Error startOver={startOver} />} />
      </Switch>
    </div>
  );
}

export default App;
