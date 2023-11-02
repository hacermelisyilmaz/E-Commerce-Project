import {
  SET_ACTIVE_PAGE,
  SET_CATEGORIES,
  SET_PAGE_COUNT,
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
    case SET_PAGE_COUNT:
      return {
        ...state,
        pages: {
          ...state.pages,
          pageCount: action.payload,
        },
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          activePage: action.payload,
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
