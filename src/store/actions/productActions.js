import axiosInstance from "../../api/axiosInstance";
import fetchStates from "../fetchStates";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const setProductList = (params) => {
  return (dispatch) => {
    dispatch({
      type: SET_PRODUCT_LIST,
      payload: {
        productList: [],
        totalProductCount: 0,
        fetchState: fetchStates.FETCHING,
        error: "",
      },
    });

    axiosInstance
      .get("/products", { params })
      .then((response) => {
        dispatch({
          type: SET_PRODUCT_LIST,
          payload: {
            productList: response.data.products,
            totalProductCount: response.data.total,
            fetchState: fetchStates.FETCHED,
            error: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_PRODUCT_LIST,
          payload: {
            productList: [],
            totalProductCount: 0,
            fetchState: fetchStates.FETCH_FAILED,
            error: error.message,
          },
        });
      });
  };
};

export const addProducts = (params) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCTS,
      payload: {
        productList: [],
        totalProductCount: 0,
        fetchState: fetchStates.FETCHING,
        error: "",
      },
    });

    axiosInstance
      .get("/products", { params })
      .then((response) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: {
            productList: response.data.products,
            totalProductCount: response.data.total,
            fetchState: fetchStates.FETCHED,
            error: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: {
            productList: [],
            totalProductCount: 0,
            fetchState: fetchStates.FETCH_FAILED,
            error: error.message,
          },
        });
      });
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
