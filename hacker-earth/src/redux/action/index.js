import axios from 'axios';
import {
getData,
} from './action';

import {
  AJAX_METHOD_GET,
	GET_COMPONENTS_DATA_URL
} from '../../constants/constants';

export function getDataOnLoad(){
	return function (dispatch) {
		return axios({
      method: AJAX_METHOD_GET,
			url: GET_COMPONENTS_DATA_URL,
		})
      .then(response => {
				dispatch(getData(response.data));
			})
      .catch(error => {console.log('Error : ', error.message)});
	};
}
