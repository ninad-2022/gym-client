import * as React from "react";

const Contact = () => {
  return (
    <>
      <div className="box_contact  image align-item-between ">
        <div className="contact d-flex justify-content-center">Contact us</div>
        <div className="contact_info">
          {/* Contact form */}

          <div className="container">
            <div className="row bg_contact pt-5">
              <div className="col">
                <h2 className="headtext">Get trained today:Join us</h2>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col_contact d-flex justify-content-between">
                      {/* Phone number */}
                      <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="http://www.w3.org/2000/svg" alt=" " />
                        <div className="contact_info-title">Phone:</div>
                        <div className="contact_info_text">
                          {" "}
                          +91 1111 222 333
                        </div>
                      </div>

                      {/* Email */}
                      <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="http://www.w3.org/2000/svg" alt=" " />
                        <div className="contact_info-title">Email:</div>
                        <div className="contact_info_text">
                          {" "}
                          contactus@gmail.com
                        </div>
                      </div>

                      {/* Address */}
                      <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="http://www.w3.org/2000/svg" alt=" " />
                        <div className="contact_info-title">Address:</div>
                        <div className="contact_info_text"> Pune</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="contact_form">
                  <div className="container_form">
                    <div className="row">
                      <div className="col">
                        <div className=" contact_form_container ">
                          <div className="contact_form_title">Get in Touch</div>
                          <form id="contact_form">
                            <div className="contact_form_name d-flex justify-content-between align-items-between">
                              <input
                                type="text"
                                id="contact_form_name"
                                className="contact_form_name input_field"
                                placeholder="your name"
                                required="true"
                              />
                              <input
                                type="email"
                                id="contact_form_email"
                                className="contact_form_email input_field"
                                placeholder="your email"
                                required="true"
                              />
                              <input
                                type="number"
                                id="contact_form_phone"
                                className="contact_form_phone input_field"
                                placeholder="your phone number"
                                required="true"
                              />
                            </div>

                            <div className="contact_form_text mt-5">
                              <textarea
                                className="text_field contact_form_message"
                                placeholder="message"
                                cols="30"
                                rows="10"
                              />
                            </div>
                            <div className="contact_form_button">
                              <button
                                type="submit"
                                className="button contact_submit-button"
                              >
                                Send Message
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
