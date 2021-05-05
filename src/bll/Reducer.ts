import { API } from '../dal/Api';
import { AppStateType } from './Store';

let initialState = {
  building: null as number | null,
  height: null as number | null,
  material: null as number | null,
  sizex: null as number | null,
  sizey: null as number | null,
  result: '',
  message: '',
  status: 'succeeded',
};

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_BUILDING':
      return { ...state, building: action.building };
    case 'SET_HEIGHT':
      return { ...state, height: action.height };
    case 'SET_MATERIAL':
      return { ...state, material: action.material };
    case 'SET_SIZEX':
      return { ...state, sizex: action.sizex };
    case 'SET_SIZEY':
      return { ...state, sizey: action.sizey };
    case 'SET_RESULT':
      return { ...state, result: action.result };
    case 'SET_MESSAGE':
      return { ...state, message: action.message };
    case 'DATA_RESET':
      return { ...state, building: null, height: null, material: null, sizex: null, sizey: null, result: '', message: '' };
    case 'SET_STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};

//Action creators
export const setBuildingAC = (building: number | null) => ({ type: 'SET_BUILDING', building } as const);
export const setHeightAC = (height: number | null) => ({ type: 'SET_HEIGHT', height } as const);
export const setMaterialAC = (material: number | null) => ({ type: 'SET_MATERIAL', material } as const);
export const setSizexAC = (sizex: number | null) => ({ type: 'SET_SIZEX', sizex } as const);
export const setSizeyAC = (sizey: number | null) => ({ type: 'SET_SIZEY', sizey } as const);
export const setResultAC = (result: string) => ({ type: 'SET_RESULT', result } as const);
export const setMessageAC = (message: string) => ({ type: 'SET_MESSAGE', message } as const);
export const dataResetAC = () => ({ type: 'DATA_RESET' } as const);
export const setStatusAC = (status: string) => ({ type: 'SET_STATUS', status } as const);
//Thunk creators

export const getResultTC = () => async (dispatch: any, getState: () => AppStateType) => {
  try {
    dispatch(setStatusAC('loading'));
    const building = getState().app.building;
    const height = getState().app.height;
    const material = getState().app.material;
    const sizex = getState().app.sizex;
    const sizey = getState().app.sizey;
    const response: any = await API.getResultInfo(building, height, material, sizex, sizey);
    dispatch(setStatusAC('succeeded'));
    dispatch(setResultAC(response.data.result));
    dispatch(setMessageAC(response.data.message));
  } catch (error) {}
};

//types
type ActionsType = ReturnType<typeof setBuildingAC> | ReturnType<typeof setHeightAC> | ReturnType<typeof setMaterialAC> | ReturnType<typeof setSizexAC> | ReturnType<typeof setSizeyAC> | ReturnType<typeof setResultAC> | ReturnType<typeof setMessageAC> | ReturnType<typeof dataResetAC> | ReturnType<typeof setStatusAC>;
export type InitialStateType = typeof initialState;
