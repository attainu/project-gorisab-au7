import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import userProductsReducer from "./userProductsReducer";
import categoryReducer from "./categoryReducer";
import categoryProductsReducer from "./categoryProductsReducer";
import singleProductReducer from "./singleProductReducer";
import usersReducer from "./usersReducer";
import wishlistReducer from "./wishlistReducer";
import permissionsReducer from "./permissionsReducer";


const rootReducer = combineReducers({
  productsss: productReducer,
  userProductsss: userProductsReducer,
  categoriesss: categoryReducer,
  categoryProductsss: categoryProductsReducer,
  singleProducttt: singleProductReducer,
  userrr: usersReducer,
  wishlisttt: wishlistReducer,
  permissionsss: permissionsReducer,
});

export default rootReducer;
