import React, { useState } from 'react';
import { Step } from './components/Step';
import { TextField } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { setHeightAC } from '../bll/Reducer';

type Step2PropsType = {
  startOver: () => void;
  nextStep: () => void;
};

export const Step2 = (props: Step2PropsType) => {
  const { startOver, nextStep } = props;
  const dispatch = useDispatch();
  const [fieldValue, setFieldValue] = useState<string>('');
  const onChangeHandler = (e: any) => {
    setFieldValue(e.currentTarget.value);
  };
  const setHeight = () => {
    dispatch(setHeightAC(+fieldValue));
    nextStep();
  };
  return (
    <div>
      <Step title={'Количество этажей(число)'} step={'Шаг 2'} numberOfButtons={2} onClickCancellation={startOver} button2Name={'Далее'} onClickNextStep={setHeight}>
        <form>
          <TextField variant='outlined' style={{ margin: '20px', width: '100px' }} value={fieldValue} onChange={onChangeHandler} />
        </form>
      </Step>
    </div>
  );
};
