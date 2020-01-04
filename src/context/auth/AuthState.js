import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

import {
   GET_USER,
   GET_USERS,
   SET_LOADING,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   CLEAR_ERRORS
} from "../types";

const AuthState = props => {
   const initialState = {
      token: localStorage.getItem("token"),
      isAuthenticated: null,
      error: null,
      users: [],
      user: null,
      loading: false
   };

   const [state, dispatch] = useReducer(AuthReducer, initialState);

   // Get User
   const getUser = async () => {
      setLoading();
      const res = await axios.get(`/api/users:id`);
      dispatch({
         type: GET_USER,
         payload: res.data
      });
   };

   // Get Users
   const getUsers = async () => {
      setLoading();
      const res = await axios.get(`/api/users`);
      dispatch({
         type: GET_USERS,
         payload: res.data
      });
   };

   // Set Loading
   const setLoading = () => dispatch({ type: SET_LOADING });

   // Load User
   const loadUser = async () => {
      if (localStorage.token) {
         setAuthToken(localStorage.token);
      }

      try {
         const res = await axios.get("/api/auth");

         dispatch({
            type: USER_LOADED,
            payload: res.data
         });
      } catch (err) {
         dispatch({
            type: AUTH_ERROR
         });
      }
   };

   // Register User
   const register = async formData => {
      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };

      try {
         const res = await axios.post("/api/users", formData, config);

         dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
         });

         loadUser();
      } catch (err) {
         dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
         });
      }
   };

   // Login User
   const login = async (formData) => {
      const config = {
         headers: {
            "Content-Type": "application/json"
         }
      };

      try {
         const res = await axios.post("/api/auth", formData, config);

         dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
         });

         loadUser();
      } catch (err) {
         dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
         });
      }
   };

   // Logout
   const logout = () => {
      dispatch({
         type: LOGOUT
      })
   };

   // Clear Errors
   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

   return (
      <AuthContext.Provider
         value={{
            users: state.users,
            loading: state.loading,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            getUser,
            getUsers,
            register,
            loadUser,
            login,
            logout,
            clearErrors
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
