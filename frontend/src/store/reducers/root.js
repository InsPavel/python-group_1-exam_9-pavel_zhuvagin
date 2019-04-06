import {combineReducers} from 'redux';
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import productListReducer from "./product-list";
import productDetailReducer from "./product-detail";


const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    productList: productListReducer,
    productDetail: productDetailReducer
});

export default rootReducer;
