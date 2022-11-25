import { endpoints, API } from "../api/Index";

class RegisterServices {
  static createRegister(register) {
    return API.post(endpoints.api.register.create, register);
  }

  static deleteRegister(id) {
    return API.delete(endpoints.api.register.delete + id);
  }

  static getAllRegister() {
    return API.get(endpoints.api.register.getAll);
  }
}
export default RegisterServices;
