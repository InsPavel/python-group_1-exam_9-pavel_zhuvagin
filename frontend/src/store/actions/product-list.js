import axios from 'axios';
import {PRODUCT_LIST} from "../../api-urls";

export const PRODUCT_LIST_REQUEST_SUCCESS = "PRODUCT_LIST_REQUEST_SUCCESS";

export const loadProduct = () => {
    return dispatch => {
        axios.get(PRODUCT_LIST)
            .then(response => {
            console.log(response);
            return dispatch({
                type: PRODUCT_LIST_REQUEST_SUCCESS, products: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
};