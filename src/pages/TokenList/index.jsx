import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React from "react";

export const TokenList = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead></TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [];
