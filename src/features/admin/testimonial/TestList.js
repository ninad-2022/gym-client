import React, { useEffect, useState } from "react";
import axios from "axios";
import Muidatatable from "mui-datatables";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TesContext from "./TesContext";
import AddEditTest from "./AddEditTest";

const TestList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialTestimonial, setInitialTestimonial] = useState({});

  const handleClose = () => setOpen(false);

  const addTestimonial = () => {
    setInitialTestimonial({});
    setOperation("add");
    setOpen(true);
  };

  const editTestimonial = (u) => {
    setInitialTestimonial(u);
    setOperation("edit");
    setOpen(true);
  };

  const loadTestimonials = () => {
    axios
      .get("http://localhost:8888/v1/testimonials")
      .then((response) => {
        setTestimonials(response.data.data);
        // console.log(response);
      })
      .catch(console.log);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const deleteTestimonial = (id) => {
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
        axios
          .delete(`http://localhost:8888/v1/testimonials/${id}`)
          .then((response) => {
            loadTestimonials();
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
      name: "name",
      label: "Name",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "designation",
      label: "Designation",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const testimonial = testimonials[index];
          return (
            <>
              <IconButton
                color="primary"
                onClick={() => editTestimonial(testimonial)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => deleteTestimonial(testimonial?._id)}
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
      <Button onClick={addTestimonial} variant="contained" color="primary">
        New +
      </Button>

      <TesContext.Provider
        value={{
          open: open,
          operation: operation,
          handleClose: handleClose,
          initialTestimonial,
          loadTestimonials,
        }}
      >
        <AddEditTest />
      </TesContext.Provider>

      <Muidatatable title=" List" data={testimonials} columns={columns} />
    </>
  );
};

export default TestList;
