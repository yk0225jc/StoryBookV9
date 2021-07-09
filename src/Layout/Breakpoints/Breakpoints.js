import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import MUIBreakpoint from "./Breakpoint_images/MUIBreakpoint.png";
import MobileBrowserWidth from './Breakpoint_images/Mobilebrowserwidth.png'
import DesktopBrowserWidth from './Breakpoint_images/BrowserWidth.png'

function createData(breakpoint, midwidth, maxwidth, description) {
  return { breakpoint, midwidth, maxwidth, description };
}

const rows = [
  createData(<b>XL</b>, 1440, "ect.", "Same as LG view, just bigger"),
  createData(<b>LG</b>, 1280, 1439, 37, "Default desktop"),
  createData(<b>MD</b>, 960, 1279, 24, "Landscape tablet"),
  createData(<b>SM</b>, 600, 959, 67, "Portrait tablet and phablet view"),
  createData(
    <b>XS</b>,
    0,
    599,
    49,
    "Mobile view. Note that the Mobile UI's breakpoints does not support this size.  (In Axure we are using 360 as a mid-size so we can see what the designs look like)"
  ),
];

//for Audience Estimates Table
function createData2(percentofUser, widthofDeivce) {
  return { percentofUser, widthofDeivce };
}

const rows2 = [
  createData2("27%", "300-399"),
  createData2("23%", "400-499"),
  createData2("3%", "500-959"),
  createData2("16%", "960-1279"),
  createData2("20%", "1280-1899"),
  createData2("12%", "1900+"),
];

export const Breakpoints1 = () => {
  return (
    <div className="container">
      <div className="sectioncontainer">
        <h2>Material-UI Breakpoints</h2>
        <img src={MUIBreakpoint} alt="" />
      </div>

      <div className="sectioncontainer">
        <h2>NTE Wireframe Breakpoints</h2>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Breakpoint</b>
                </TableCell>
                <TableCell align="center">
                  <b>MinWidth</b>
                </TableCell>
                <TableCell align="center">
                  <b>MaxWidth</b>
                </TableCell>
                <TableCell align="center">
                  <b>Description</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.breakpoint}
                  </TableCell>
                  <TableCell align="center">{row.midwidth}</TableCell>
                  <TableCell align="center">{row.maxwidth}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="sectioncontainer">
        <h2>Audience Estimates</h2>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Percent of Users</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Width of Device</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow >
                    <TableCell component="th" scope="row">
                      {row.percentofUser}
                    </TableCell>
                    <TableCell align="center">{row.widthofDeivce}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="sectioncontainer">
        <h2>Mobile browser widths</h2>
        <img src={MobileBrowserWidth} alt="" />
      </div>

      
      <div className="sectioncontainer">
        <h2>Desktop browser widths</h2>
        <p>50% at 1,400 or greater</p>
        <img src={DesktopBrowserWidth} alt="" />
      </div>
      </div>
  );
};
