import React from 'react';
import { Step } from './components/Step';
import { useSelector } from 'react-redux';
import { AppStateType } from '../bll/Store';

type ResultPropsType = {
  startOver: () => void;
};

export const Result = (props: ResultPropsType) => {
  const { startOver } = props;
  const message = useSelector<AppStateType, string>(state => state.app.message);
  return (
    <div>
      <Step title={'Успешно'} step={'Результат расчета'} numberOfButtons={1} onClickCancellation={startOver}>
        <h3 style={{ color: 'blue', margin: '20px' }}>{message}</h3>
      </Step>
    </div>
  );
};
