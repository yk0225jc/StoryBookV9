import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./Accessibility.css";

export const A360MUIAccess = () => {
  return (
    <div className="container">
      <h2>Access to A360 Hub</h2>
      <p>
        Please refer to the documentation provided by our accessibility partner.
        In order to access their hub, here is the generic user login
        information.
      </p>

      <p>
        Site : https://hub.accessible360.com/users/sign_in
        <br />
        User : adatraining@northerntool.com
        <br />
        Password : ADAtraining!
        <br />
      </p>
      <h2>Material UI Accessibility</h2>
      <p>
        Material UI has considered accessibility, but pay close attention to
        A360's notes to ensure it is compliant.
        <br /> Material UI has screen reader documentation :
        https://next.material-ui.com/system/screen-readers/ <br />
      </p>
    </div>
  );
};

function createData(description, documentation) {
  return { description, documentation };
}

const rows = [
  createData(
    "#1: The language of the page needs to be declared on the HTML element.",
    "https://hub.accessible360.com/issues/211282/edit"
  ),
  createData(
    "#2: All pages must be scalable.",
    "https://hub.accessible360.com/kb/articles/164"
  ),
  createData(
    "#3: Each page needs a unique page title.",
    "https://hub.accessible360.com/kb/articles/80"
  ),
  createData(
    "#4: Each page needs landmarks to help screen reader users navigate to different sections of the page.",
    "https://hub.accessible360.com/issues/211285/edit"
  ),
];

const rows2 = [
  createData(
    "FOCUS / #7: Focus order should follow a standard reading order, and all focusable elements need a focus indicator.",
    "https://hub.accessible360.com/issues/211288/edit"
  ),
  createData(
    "KEYBOARD / #11: The use of tabindex attributes can negatively impact accessibility.",
    "https://hub.accessible360.com/issues/211292/edit"
  ),
  createData(
    "CONTENT / #16: All lists need to be marked up as such.",
    "https://hub.accessible360.com/issues/211297/edit"
  ),
  createData(
    "CONTENT / #18: Elements that control expandable content need to indicate this to screen reader users.",
    "https://hub.accessible360.com/issues/211343/edit"
  ),
  createData(
    "CONTENT / #21: Visual groupings need to be conveyed to screen reader users so that they understand the structure of the content on the page.",
    "https://hub.accessible360.com/issues/211297/edit"
  ),
  createData(
    "CONTENT / #38: Page headings should maintain a logical outline structure.",
    "https://hub.accessible360.com/issues/212617/edit"
  ),

];

export const A360Guidelines = () => {
  return (
    <div className="container">
      <h2>A360 Guidelines</h2>
      <p>Global</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="center">Documentation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell style={{ width: 500 }}>{row.description}</TableCell>
                <TableCell align="center">{row.documentation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <p>Page Content</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="center">Documentation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow>
                <TableCell style={{ width: 500 }}>{row.description}</TableCell>
                <TableCell align="center">{row.documentation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
