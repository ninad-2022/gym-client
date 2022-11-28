import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

const GymSchedule = () => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      borderTop: "1px solid #fff",
      backgroundColor: "#ed563d",
      color: "white",
    },

    ":first-child": {
      border: "1px solid #fff",
    },
    ":last-child": {
      borderRight: "1px solid #fff",
    },

    transition: ".5s linear",

    "&:hover": {
      backgroundColor: "#ed563d",
    },

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: "white",
      padding: "20px",
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    " th": {
      backgroundColor: "#ed563d",
      borderRight: "1px solid white",
    },
  }));

  function createData(name, AM6, AM7, AM8, AM11, PM6, PM7, PM8) {
    return { name, AM6, AM7, AM8, AM11, PM6, PM7, PM8 };
  }

  const rows = [
    createData(
      "MONDAY",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba"
    ),
    createData(
      "TUESDAY",
      "Yoga",
      "Yoga",
      "Yoga",
      "Steam Bath",
      "Steam Bath",
      "-",
      "-"
    ),
    createData(
      "WEDNESDAY",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba",
      "Aerobics Zumba"
    ),
    createData(
      "THURSDAY",
      "-",
      "Cross Fit On Terrace",
      "Cross Fit On Terrace",
      "Cross Fit On Terrace",
      "-",
      "-",
      "-"
    ),
    createData("FRIDAY", "Yoga", "Yoga", "Yoga", " - ", "-", "-", "-"),
    createData(
      "SATURDAY",
      "-",
      "Cross Fit On Terrace",
      "Cross Fit On Terrace",
      "Cross Fit On Terrace",
      "-",
      "-",
      "-"
    ),
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#232d39", height: "100vh" }}
      xs={12}
    >
      <Typography variant="h3" align="center" color="#fff" padding="20px">
        GYM SCHEDULE
      </Typography>
      <Table
        sx={{ maxWidth: 1300, margin: "auto" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Routine</StyledTableCell>
            <StyledTableCell align="center">6AM</StyledTableCell>
            <StyledTableCell align="center">7AM</StyledTableCell>
            <StyledTableCell align="center">8AM</StyledTableCell>
            <StyledTableCell align="center">11AM</StyledTableCell>
            <StyledTableCell align="center">6PM</StyledTableCell>
            <StyledTableCell align="center">7PM</StyledTableCell>
            <StyledTableCell align="center">8PM</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.AM6}</StyledTableCell>
              <StyledTableCell align="center">{row.AM7}</StyledTableCell>
              <StyledTableCell align="center">{row.AM8}</StyledTableCell>
              <StyledTableCell align="center">{row.AM11}</StyledTableCell>
              <StyledTableCell align="center">{row.PM6}</StyledTableCell>
              <StyledTableCell align="center">{row.PM7}</StyledTableCell>
              <StyledTableCell align="center">{row.PM8}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GymSchedule;
