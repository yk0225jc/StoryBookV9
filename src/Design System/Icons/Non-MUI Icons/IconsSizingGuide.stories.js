import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default {
  title: "Design System/Icon",
};

function createData(height, usage) {
  return { height, usage };
}

const rows = [
  createData("8px", "Simple icon that pairs with text"),
  createData("16px", "Typical icon"),
  createData(
    "24px-48px",
    "Icon with fair amount of detail that is used within a card or tile"
  ),
  createData(
    "56px+",
    "Icon that is being used like a logo and is a major focus of the content section"
  ),
];

export const BasicTable = () => {
  return (
    <>
      <h1>Icon Sizing Guidelines (8pt Grid)</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Height</TableCell>
              <TableCell align="left">Usage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell align="center">{row.height}</TableCell>
                <TableCell align="left">{row.usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

BasicTable.storyName = "Icon Sizing Guidelines";
