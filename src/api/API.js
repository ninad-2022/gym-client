import axios from "axios";
import AuthService from "../services/AuthServices";
import endpoints from "./Endpoints";
// creating axios instance for fetching api

const API = axios.create({
  baseURL: `${endpoints.serverBaseURL}/api/v1`,
});

// intercepting the req for adding the token with all the request
API.interceptors.request.use((req) => {
  const aToken = sessionStorage.getItem("access");
  if (aToken && req.headers) {
    req.headers["authorization"] = aToken;
  }
  // console.log("a", aToken);
  // console.log("req.header", req.headers);
  return req;
});

//check for the 420 response and if we got 420 then
API.interceptors.response.use(
  (res) => {
    console.log("Response interceptor");
    return res;
  },
  async (err) => {
    console.error(err);
    if (err.response.status == 420) {
      //access token expired
      const response = await AuthService.refreshToken();
      if (response.data?.data) {
        //token refreshed
        const { accessT, refreshT } = response?.data?.data;
        sessionStorage.setItem("refresh", refreshT);
        sessionStorage.setItem("access", accessT);
        return Promise.resolve({ data: null, message: "token refreshed" });
      } else {
        sessionStorage.clear();
        window.location.href = "/login";
      }
    }
  }
);

export default API;
