import React from 'react';
import { Step } from './components/Step';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBuildingAC } from '../bll/Reducer';

type Step1PropsType = {
  nextStep: () => void;
};

export const Step1 = (props: Step1PropsType) => {
  const { nextStep } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Step title={'Что будем строить?'} step={'Шаг 1'} numberOfButtons={2} button2Name={'Далее'} onClickNextStep={nextStep}>
        <ul>
          <li>
            <Link
              to={'/step2'}
              onClick={() => {
                dispatch(setBuildingAC(1));
              }}
            >
              Жилой дом
            </Link>
          </li>
          <li>
            <Link
              to={'/step2ForGarage'}
              onClick={() => {
                dispatch(setBuildingAC(2));
              }}
            >
              Гараж
            </Link>
          </li>
        </ul>
      </Step>
    </div>
  );
};
