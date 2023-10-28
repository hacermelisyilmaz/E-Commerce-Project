import axiosInstance from "../../api/axiosInstance";
import fetchStates from "../fetchStates";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const setProductList = (products) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: products,
  };
};

export const setTotalProductCount = () => {
  return {
    type: SET_TOTAL_PRODUCT_COUNT,
  };
};

export const setPageCount = (count) => {
  return {
    type: SET_PAGE_COUNT,
    payload: count,
  };
};

export const setActivePage = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: page,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORIES,
      payload: {
        categoryList: [],
        fetchState: fetchStates.FETCHING,
        error: "",
      },
    });

    axiosInstance
      .get("/categories")
      .then((response) => {
        dispatch({
          type: SET_CATEGORIES,
          payload: {
            categoryList: response.data,
            fetchState: fetchStates.FETCHED,
            error: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CATEGORIES,
          payload: {
            categoryList: [],
            fetchState: fetchStates.FETCH_FAILED,
            error: error.message,
          },
        });
      });
  };
};
