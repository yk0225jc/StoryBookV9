import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  H1Title,
  H1Fontname,
  H1Attribute,
  H2Title,
  H2Fontname,
  H2Attribute,
  H3Title,
  H3Fontname,
  H3Attribute,
  BodyTitle,
  BodyFontname,
  BodyAttribute,
  SmallBodyTitle,
  SmallBodyFontname,
  SmallBodyAttribute,
  H2SubHeadingProTitle,
  H2SubHeadingProFontname,
  H2SubHeadingProAttribute
} from "./Typography";

export default {
  title: "Design System/Typography",
};

function createData(heading, fontName, attribute) {
  return { heading, fontName, attribute };
}

const rows = [
  createData(<H1Title />, <H1Fontname />, <H1Attribute />),
  createData(<H2Title />, <H2Fontname />, <H2Attribute />),
  createData(<H3Title />, <H3Fontname />, <H3Attribute />),
  createData(<BodyTitle />, <BodyFontname />, <BodyAttribute />),
  createData(<SmallBodyTitle />, <SmallBodyFontname />, <SmallBodyAttribute />),
  createData(<H2SubHeadingProTitle />, <H2SubHeadingProFontname />, <H2SubHeadingProAttribute />),

];

export const Typography = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Heading</TableCell>
            <TableCell align="center">Font name</TableCell>
            <TableCell align="center">Attribute</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell style={{ width: 500}}>{row.heading}</TableCell>
              <TableCell align="center">{row.fontName}</TableCell>
              <TableCell align="center">{row.attribute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
