import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  SET_ACTIVE_PAGE,
  SET_PAGE_COUNT,
  SET_PRODUCT_LIST,
  SET_TOTAL_PRODUCT_COUNT,
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
        products: {
          ...state.products,
          productList: [...state.products.productList, action.payload],
        },
      };
    case SET_TOTAL_PRODUCT_COUNT:
      return {
        ...state,
        products: {
          ...state.products,
          totalProductCount: state.products.totalProductCount + 1,
        },
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
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetchState: fetchStates.FETCHING,
          error: null,
        },
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetchState: fetchStates.FETCHED,
          categoryList: action.payload,
          error: null,
        },
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetchState: fetchStates.FETCH_FAILED,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default productReducer;
