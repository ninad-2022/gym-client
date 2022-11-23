import React, { useEffect, useState } from "react";
import axios from "axios";
import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import MemContext from "./MemContext";
import { Typography } from "@mui/material";
import AddEditMembership from "./AddEditMembership";
import MembershipServices from "../../../services/MembershipService";

const MembershipList = () => {
  const [memberships, setMemberships] = useState([]);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialMembership, setInitialMembership] = useState({});

  const handleClose = () => setOpen(false);

  const addMembership = () => {
    setInitialMembership({});
    setOperation("add");
    setOpen(true);
  };

  const editMembership = (u) => {
    setInitialMembership(u);
    setOperation("edit");
    setOpen(true);
  };

  const loadMemberships = () => {
    MembershipServices.getAllMembership()
      .then((responce) => {
        setMemberships(responce?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    loadMemberships();
  }, []);
  // console.log("Membership");

  const deleteMembership = (id) => {
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
        MembershipServices.deleteMembership(id)
          .then((response) => {
            loadMemberships();
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
      name: "title",
      label: "Title",
    },
    {
      name: "price",
      label: "Price/Month",
    },
    {
      name: "facilites",
      label: "Facilities",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => (
          <Typography textTransform="uppercase">
            {value.map((faci) => faci).join(",")}
          </Typography>
        ),
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const membership = memberships[index];
          return (
            <>
              <IconButton
                color="primary"
                onClick={() => editMembership(membership)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => deleteMembership(membership?._id)}
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
      <Button onClick={addMembership} variant="contained" color="primary">
        New +
      </Button>

      <MemContext.Provider
        value={{
          open: open,
          operation: operation,
          handleClose: handleClose,
          initialMembership,
          loadMemberships,
        }}
      >
        <AddEditMembership />
      </MemContext.Provider>

      <Muidatatable
        title="Membership List"
        data={memberships}
        columns={columns}
      />
    </>
  );
};

export default MembershipList;
