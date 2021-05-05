import React from 'react';
import { Step } from './components/Step';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMaterialAC } from '../bll/Reducer';

type Step3PropsType = {
  startOver: () => void;
  nextStep: () => void;
};

export const Step3 = (props: Step3PropsType) => {
  const { startOver, nextStep } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Step title={'Материал стен'} step={'Шаг 3'} numberOfButtons={2} onClickCancellation={startOver} button2Name={'Далее'} onClickNextStep={nextStep}>
        <ul>
          <li>
            <Link
              to={'/step4'}
              onClick={() => {
                dispatch(setMaterialAC(1));
              }}
            >
              Кирпич
            </Link>
          </li>
          <li>
            <Link
              to={'/step4'}
              onClick={() => {
                dispatch(setMaterialAC(2));
              }}
            >
              Шлакоблок
            </Link>
          </li>
          <li>
            <Link
              to={'/step4'}
              onClick={() => {
                dispatch(setMaterialAC(3));
              }}
            >
              Деревянный брус
            </Link>
          </li>
        </ul>
      </Step>
    </div>
  );
};
