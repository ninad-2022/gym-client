import React, { useEffect, useState } from "react";
import axios from "axios";
import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";
import ContactUsServices from "../../../services/ContactUsService";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState([]);

  const loadContactUs = () => {
    ContactUsServices.getAllContactUs()
      .then((responce) => {
        setContactUs(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadContactUs();
  }, []);

  const editContactUs = () => {
    ContactUsServices.updateContactUs(contactUs._id, contactUs)
      .then((response) => {
        loadContactUs();
        alert("Enquiry updated");
      })
      .catch((err) => {
        alert("could not updated");
      });
  };
  const deleteContactUs = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        ContactUsServices.deleteContactUs(id)
          .then((response) => {
            loadContactUs();
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Not Deleted!",
              "Your reocrd has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "mobile",
      label: "Mobile No.",
    },
    {
      name: "message",
      label: "Message",
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const contUs = contactUs[index];
          return (
            <>
              {/* <IconButton color="primary" onClick={() => editContactUs(contUs)}>
                <EditIcon />
              </IconButton> */}
              <IconButton
                color="error"
                onClick={() => deleteContactUs(contUs?._id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      {/* <Button onClick={addMembership} variant="contained" color="primary">
        New +
      </Button> */}

      {/* <MemContext.Provider
        value={{
          open: open,
          operation: operation,
          handleClose: handleClose,
          initialMembership,
          loadMemberships,
        }}
      >
        <AddEditMembership />
      </MemContext.Provider> */}

      <Muidatatable title="Enquiry List" data={contactUs} columns={columns} />
    </>
  );
};

export default ContactUs;
