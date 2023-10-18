import axiosInstance from "../api/axiosInstance";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

const fetchRolesRequest = () => ({
  type: FETCH_ROLES_REQUEST,
});

const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});

const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

export const fetchRoles = () => {
  return (dispatch) => {
    dispatch(fetchRolesRequest());

    axiosInstance
      .get("/roles")
      .then((response) => {
        dispatch(fetchRolesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchRolesFailure(error.message));
      });
  };
};
