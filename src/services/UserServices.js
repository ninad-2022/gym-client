import { endpoints, API } from "../api";

class UserServices {
  static createUser(user) {
    return API.post(endpoints.api.user.create, user);
  }
}
export default UserServices;
