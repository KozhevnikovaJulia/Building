import React, { useState } from 'react';
import { Step } from './components/Step';
import { TextField } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../bll/Store';
import { getResultTC, setSizexAC, setSizeyAC } from '../bll/Reducer';
import { Redirect } from 'react-router-dom';

type Step4PropsType = {
  startOver: () => void;
};

export const Step4 = (props: Step4PropsType) => {
  const { startOver } = props;
  const [fieldsizexValue, setFieldsizexValue] = useState<string>('');
  const [fieldsizeyValue, setFieldsizeyValue] = useState<string>('');
  const onChangefieldsizexHandler = (e: any) => {
    setFieldsizexValue(e.currentTarget.value);
  };
  const onChangefieldsizeyValueHandler = (e: any) => {
    setFieldsizeyValue(e.currentTarget.value);
  };
  const dispatch = useDispatch();
  const result = useSelector<AppStateType, string>(state => state.app.result);

  console.log(result);

  const getResult = () => {
    dispatch(setSizexAC(+fieldsizexValue));
    dispatch(setSizeyAC(+fieldsizeyValue));
    dispatch(getResultTC());
  };
  if (result === 'ok') {
    return <Redirect to={'/result'} />;
  } else if (result === 'error') {
    return <Redirect to={'/error'} />;
  }
  return (
    <div>
      <Step title={'Длина стен в метрах'} step={'Шаг 4'} numberOfButtons={2} onClickCancellation={startOver} button2Name={'Расчитать'} onClickNextStep={getResult}>
        <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TextField variant='outlined' style={{ margin: '20px', width: '100px' }} value={fieldsizexValue} onChange={onChangefieldsizexHandler} />
          Х
          <TextField variant='outlined' style={{ margin: '20px', width: '100px' }} value={fieldsizeyValue} onChange={onChangefieldsizeyValueHandler} />
        </form>
      </Step>
    </div>
  );
};
