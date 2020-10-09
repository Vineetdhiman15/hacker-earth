import * as actionTypes from './actionTypes';

export const getData = response => ({
    type: actionTypes.GET_PAGE_LOAD_DATA,
    payload: response.data
});
