import { ACTION_TYPE, ENDPOINTS } from "../../services/constants/Index";
import Api from "../../services/utills/Axios";

// Action to post a status
export const postStatus = (body) => async (dispatch) => {
  try {
    const res = await Api.post(`/post/postStatus`, body);

    await dispatch({
      type: ACTION_TYPE.POST_LIST,
      payload: { data: res.data },
    });
  } catch (error) {}
};

// Action to get a status
export const getStatus = (userId) => async (dispatch) => {
  try {
    const res = await Api.get(`/post/getFeed/${userId}`);

    await dispatch({
      type: ACTION_TYPE.POST_LIST,
      payload: { data: res.data },
    });
  } catch (error) {}
};

// Action to post a status
export const peopleList = (userId) => async (dispatch) => {
  try {
    const res = await Api.get(`/user/getPeople/${userId}`);

    await dispatch({
      type: ACTION_TYPE.PEOPLE_LIST,
      payload: { data: res.data },
    });
  } catch (error) {}
};
export const followUnFollow = (body) => async (dispatch) => {
  try {
    const res = await Api.post(`/user/follow`, body);
    return res;
  } catch (error) {}
};

// Action to add a employee
export const addEmployee = (body) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await Api.post(ENDPOINTS.ADD_EMPLOYEE, body);
    dispatch({
      type: ACTION_TYPE.ADD,
      payload: res.data,
    });
    return res?.data;

    dispatch({ type: "LOADING_COMPLETED" });
  } catch (err) {
    dispatch({ type: "LOADING_FAILURE" });
    // dispatch(handleError(err));
  }
};

// Action to getall  employees
export const getAllEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await Api.get(ENDPOINTS.GET_EMPLOYESS);

    console.log("res", res.data.data);
    dispatch({
      type: ACTION_TYPE.GETALL,
      payload: res.data,
    });
    return res?.data;

    dispatch({ type: "LOADING_COMPLETED" });
  } catch (err) {
    dispatch({ type: "LOADING_FAILURE" });
    // dispatch(handleError(err));
  }
};

// Action to get an employee
export const getEmployee = (email) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await Api.get(ENDPOINTS.GET_EMPLOYEE);

    console.log("res", res.data.data);
    dispatch({
      type: ACTION_TYPE.GETALL,
      payload: res.data,
    });
    return res?.data;

    dispatch({ type: "LOADING_COMPLETED" });
  } catch (err) {
    dispatch({ type: "LOADING_FAILURE" });
    // dispatch(handleError(err));
  }
};

// Action to update an employee
export const updateEmployee = (body) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await Api.post(ENDPOINTS.UPDATE, body);
    dispatch({
      type: ACTION_TYPE.GETALL,
      payload: res.data,
    });
    return res?.data;

    dispatch({ type: "LOADING_COMPLETED" });
  } catch (err) {
    dispatch({ type: "LOADING_FAILURE" });
    // dispatch(handleError(err));
  }
};

// Action to delete a employee
export const deleteEmployee = (body) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_STARTED" });
    const res = await Api.post(ENDPOINTS.DELETE, body);
    dispatch({
      type: ACTION_TYPE.GETALL,
      payload: res.data,
    });
    return res?.data;

    dispatch({ type: "LOADING_COMPLETED" });
  } catch (err) {
    dispatch({ type: "LOADING_FAILURE" });
    // dispatch(handleError(err));
  }
};
