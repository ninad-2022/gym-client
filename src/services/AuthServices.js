import { API, endpoints } from "../api/Index";
import User from "../shared/models/UserModel";

class AuthService {
  static userLogin(user) {
    return API.post(endpoints.api.auth.userLogin, user).then((response) => {
      // storing token into sessionStorage
      const accessToken = response.headers["x-access-token"];
      const refreshToken = response.headers["x-refresh-token"];
      sessionStorage.setItem("refresh", refreshToken);
      sessionStorage.setItem("access", accessToken);

      return response;
    });
  } //user login

  static validateToken() {
    return API.post(endpoints.api.auth.validateToken, {});
  }

  static refreshToken() {
    const refresh = sessionStorage.getItem("refresh");
    if (!refresh) return Promise.reject("Token not available");
    // passing refresh token ot the body
    return API.post(endpoints.api.auth.refreshToken, { refresh });
  }
}

export default AuthService;
