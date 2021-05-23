import axios from "axios";

export const configureRequests = () => {
  return axios.interceptors.request.use(
    (req) => {
      req.headers["Authorization"] = `Bearer ${sessionStorage.getItem(
        "token"
      )}`;
      return req;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
