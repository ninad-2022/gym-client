import React, { useEffect, useState } from "react";
import axios from "axios";
import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";
import RegisterServices from "../../../services/RegisterService";

const Registered = () => {
  const [registered, setRegistered] = useState([]);

  const loadRegistered = () => {
    RegisterServices.getAllRegister()
      .then((responce) => {
        setRegistered(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadRegistered();
  }, []);

  const deleteRegistered = (id) => {
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
        RegisterServices.deleteRegister(id)
          .then((response) => {
            loadRegistered();
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
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = registered[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
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
      name: "pack",
      label: "Package",
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const reg = registered[index];
          return (
            <>
              <IconButton
                color="error"
                onClick={() => deleteRegistered(reg?._id)}
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
      <Muidatatable
        title="Registered List"
        data={registered}
        columns={columns}
      />
    </>
  );
};

export default Registered;
