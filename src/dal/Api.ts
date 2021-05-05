import Axios from 'axios';

export const API = {
  getResultInfo(building: number | null, height: number | null, material: number | null, sizex: number | null, sizey: number | null) {
    return Axios.get(`https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`);
  },
};
