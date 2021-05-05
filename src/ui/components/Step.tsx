import React from 'react';
import s from './Step.module.css';
import { Button, Paper } from '@material-ui/core/';

type StepPropsType = {
  title: string;
  step: string;
  children: any;
  numberOfButtons: number;
  onClickCancellation?: () => void;
  onClickNextStep?: () => void;
  button2Name?: string;
};
export const Step = (props: StepPropsType) => {
  const { step, title, children, numberOfButtons, onClickCancellation, onClickNextStep, button2Name } = props;
  return (
    <Paper elevation={3}>
      <div className={s.container}>
        <h2>Калькулятор цены конструкций</h2>
        <h3>{step}</h3>
        <div className={s.mainContainer}>
          <div className={s.title}>
            <p>{title}</p>
          </div>
          <div className={s.contant}>{children}</div>
        </div>
        {numberOfButtons === 2 ? (
          <div className={s.buttons}>
            <Button onClick={onClickCancellation} style={{ backgroundColor: 'grey', marginRight: '10px' }}>
              Отмена
            </Button>
            <Button onClick={onClickNextStep} style={{ backgroundColor: 'grey' }}>
              {button2Name}
            </Button>
          </div>
        ) : (
          <div className={s.buttons}>
            <Button onClick={onClickCancellation} style={{ backgroundColor: 'grey' }}>
              Новый расчет
            </Button>
          </div>
        )}
      </div>
    </Paper>
  );
};
