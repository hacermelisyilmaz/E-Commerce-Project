import {
  ADD_PRODUCTS,
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
} from "../actions/productActions.js";
import fetchStates from "../fetchStates.js";

const initialState = {
  products: {
    productList: [],
    totalProductCount: 0,
    fetchState: fetchStates.NOT_FETCHED,
    error: "",
  },
  pages: {
    pageCount: 0,
    activePage: 1,
  },
  categories: {
    categoryList: [],
    fetchState: fetchStates.NOT_FETCHED,
    error: "",
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: {
          productList: [
            ...state.products.productList,
            ...action.payload.productList,
          ],
          totalProductCount: action.payload.totalProductCount,
          fetchState: action.payload.fetchState,
          error: action.payload.error,
        },
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
