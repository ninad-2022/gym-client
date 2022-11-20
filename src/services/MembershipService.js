import { endpoints, API } from "../api/Index";

class MembershipServices {
  static createMembership(membership) {
    return API.post(endpoints.api.membership.create, membership);
  }
  static updateMembership(id, membership) {
    return API.put(endpoints.api.membership.update + id, membership);
  }
  static deleteMembership(id) {
    return API.delete(endpoints.api.membership.delete + id);
  }
  static getSingleMembership(id) {
    return API.get(endpoints.api.membership.getOne + id);
  }
  static getAllMembership() {
    return API.get(endpoints.api.membership.getAll);
  }
}
export default MembershipServices;
