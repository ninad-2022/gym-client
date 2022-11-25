import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TesContext from "./TesContext";
import TestimonialForm from "./TestimonialForm";
const AddEditTestimonial = () => {
  const { open, handleClose, operation } = useContext(TesContext);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {operation == "edit" ? "Edit" : "Add"} Testimonial
      </DialogTitle>
      <DialogContent>
        <TestimonialForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditTestimonial;
