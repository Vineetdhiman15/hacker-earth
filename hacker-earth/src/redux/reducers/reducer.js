import * as actionType from '../action/actionTypes'
import * as dataResponse from '../../data/data';

const initialState = {
  dataResponse: dataResponse.Data
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PAGE_LOAD_DATA: {
      return {
        ...state,
        dataResponse: state.dataResponse,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
