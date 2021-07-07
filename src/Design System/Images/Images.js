import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Subject from "./Images_image/Subject.png";
import Level1 from "./Images_image/Level1.png";
import HomePagePromo from './Images_image/HomePromo.png'
import "./Images.css";

function createData(name, size) {
  return { name, size };
}

const rows = [
  createData("XS", "65*65"),
  createData("SM", "112x112"),
  createData("MD", "200x200"),
  createData("LG", "400x400"),
  createData("XL", "700x700"),
  createData("XXL", "2000x2000"),
];

export const ProductImagesSize = () => {
  return (
    <div className ='marginadjust'>
      <h2>Product Images Sizes</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const NewPAD = () => {
  return (
    <div className ='marginadjust'>
      <h2>New Photography Art Direction</h2>
      <p>
        Shoot images at 16:9 aspect ratio and keep the main subject near the
        center of the photo. This provides maximum flexibility on the website
        when cropping the image for a responsive website design.
      </p>
      <p>
        <b>Example</b>
      </p>
      <img src={Subject} alt="" />
    </div>
  );
};

export const ScalingAndRes = () => {
  return (
    <div className ='marginadjust'>
      <h2>Scaling and Resolution</h2>
      <p>Account for Apple devices with retina display.</p>
      <p>Maximum amount an image should be scaled up or down.</p>
    </div>
  );
};

export const CategoryImageDirectory = () => {
  return (
    <div className ='marginadjust'>
      <h2>Category Image Directory</h2>
      <h3>https://www.northerntool.com/images/v9/categories/...</h3>
        <h4>Level 1 Categories</h4>
        <img src={Level1} alt='' />
    </div>
  );
};

export const PromosImageDirectory = () =>{
    return(
        <div className ='marginadjust'>
            <h2>Promos Image Directory</h2>
            <h3>https://www.northerntool.com/images/v9/promos/...</h3>
            <h4>Home Page Promos</h4>
            <img src={HomePagePromo} alt='' />



        </div>


    )
}