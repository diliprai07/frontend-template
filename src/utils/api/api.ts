import axios, { AxiosError } from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data
http.interceptors.request.use(
  (config) => {
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
    message: "Something went wrong!",
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
