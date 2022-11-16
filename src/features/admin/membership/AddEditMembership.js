import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import MemContext from "./MemContext";
import MembershipForm from "./MembershipForm";
const AddEditMembership = () => {
  const { open, handleClose, operation } = useContext(MemContext);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {operation == "edit" ? "Edit" : "Add"} Membership
      </DialogTitle>
      <DialogContent>
        <MembershipForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditMembership;
