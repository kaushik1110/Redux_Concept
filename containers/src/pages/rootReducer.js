import {combineReducers} from 'redux' 
import productsReducer from "../pages/product.reducer"
import cartReducer from "../pages/cartReducer"
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});
export default rootReducer;