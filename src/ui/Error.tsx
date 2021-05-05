import React from 'react';
import { Step } from './components/Step';
import { useSelector } from 'react-redux';
import { AppStateType } from '../bll/Store';

type ErrorPropsType = {
  startOver: () => void;
};

export const Error = (props: ErrorPropsType) => {
  const { startOver } = props;
  const message = useSelector<AppStateType, string>(state => state.app.message);
  return (
    <div>
      <Step title={'Ошибка'} step={'Результат расчета'} numberOfButtons={1} onClickCancellation={startOver}>
        <h3 style={{ color: 'red', margin: '20px' }}>{message}</h3>
      </Step>
    </div>
  );
};
