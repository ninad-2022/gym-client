import { endpoints, API } from "../api/Index";

class ContactUsServices {
  static createContactUs(contactus) {
    return API.post(endpoints.api.contactus.create, contactus);
  }
  static updateContactUs(id, contactus) {
    return API.put(endpoints.api.contactus.update + id, contactus);
  }
  static deleteContactUs(id) {
    return API.delete(endpoints.api.contactus.delete + id);
  }
  static getSingleContactUs(id) {
    return API.get(endpoints.api.contactus.getOne + id);
  }
  static getAllContactUs() {
    return API.get(endpoints.api.contactus.getAll);
  }
}
export default ContactUsServices;
