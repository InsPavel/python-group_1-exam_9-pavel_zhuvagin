import {PRODUCT_LOAD_SUCCESS} from "../actions/product-detail";

const initialState = {
    product: null,
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOAD_SUCCESS:
            return {...state, product: action.product};
        default:
            return state
    }
};


export default productDetailReducer;