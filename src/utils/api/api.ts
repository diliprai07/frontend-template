import axios, { AxiosError } from "axios";
// import { USER_DETAILS } from '../constants';
// import jwt_decode from "jwt-decode";
// import { APP_ROUTES } from '../appRoutes';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_USER_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data
http.interceptors.request.use(
  (config) => {
    // const userDetails = localStorage.getItem(USER_DETAILS);

    // // // Decpde id token and check it is expired or not?
    // let userDetailsJson = userDetails? JSON.parse(userDetails) : undefined;
    // const token = userDetailsJson?.signInUserSession?.idToken?.jwtToken;

    // Decpde id token and check it is expired or not?
    // if(token) {
    //     let decodedToken = jwt_decode(token);

    //     let secondsNow = new Date().getTime() / 1000;

    //     // @ts-ignore
    //     if(secondsNow>Number(decodedToken?.exp)) {
    //         localStorage.removeItem(USER_DETAILS);
    //         window.location.reload();
    //     }
    // }

    // if(token) {
    //     config.headers = {
    //         ...config.headers,
    //         Authorization: `${token}`,
    //     }
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 401) {
      //place your reentry code
      // window.location.href = `${process.env.REACT_APP_BASE_HREF}${APP_ROUTES.login}`;
      // localStorage.removeItem(USER_DETAILS);
    } else if (error?.response?.status === 409) {
      return Promise.reject({
        message: error?.response?.data.message ?? "Error Occured",
      });
    }
    const errorRes = formatError(error);
    return Promise.reject(errorRes);
  }
);

export default http;

const formatError = (error: AxiosError<any> | Error) => {
  let errorRes = {
    message: "Error Occured",
  };

  if (axios.isAxiosError(error)) {
    if (error.response) {
      errorRes = {
        message: error.message,
      };
    }
  }

  return errorRes;
};
