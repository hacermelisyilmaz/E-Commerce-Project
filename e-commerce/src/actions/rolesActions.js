import axiosInstance from "../api/axiosInstance";

export const GET_ROLES_REQUEST = "GET_ROLES_REQUEST";
export const GET_ROLES_SUCCESS = "GET_ROLES_SUCCESS";
export const GET_ROLES_FAILURE = "GET_ROLES_FAILURE";

const getRolesRequest = () => ({
  type: GET_ROLES_REQUEST,
});

const getRolesSuccess = (roles) => ({
  type: GET_ROLES_SUCCESS,
  payload: roles,
});

const getRolesFailure = (error) => ({
  type: GET_ROLES_FAILURE,
  payload: error,
});

export const getRoles = () => {
  return (dispatch) => {
    dispatch(getRolesRequest());

    axiosInstance
      .get("/roles")
      .then((response) => {
        dispatch(getRolesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getRolesFailure(error.message));
      });
  };
};
