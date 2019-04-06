import axios from 'axios';
import {PRODUCT_LIST} from "../../api-urls";

export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

export const loadProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCT_LIST + id)
        .then(response => {
            console.log(response.data);
            return dispatch({
                type: PRODUCT_LOAD_SUCCESS,
                product: response.data
            });
        })
        .catch(error => {
            console.log(error);
            console.log(error.response);
        });
    }
};

