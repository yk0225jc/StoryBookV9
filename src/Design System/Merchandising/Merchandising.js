import React from "react";

import "./Merchandising.css";
import H1Page from "./Merchandising_images/H1Page.svg";
import PlaceHolder from "./Merchandising_images/Placeholder.png";
import MainImage from "./Merchandising_images/MainImage.png";
import MainProductImage from "./Merchandising_images/MainProductImage.png";
import Alternate1 from "./Merchandising_images/Alternate1.png";
import Alternate2 from "./Merchandising_images/Alternate2.png";
import CurrentState1 from "./Merchandising_images/currentstate1.png";
import CurrentState2 from "./Merchandising_images/currentstate2.png";
import CurrentState3 from "./Merchandising_images/currentstate3.png";

export const Merchandising1 = () => {
  return (
    <>
      <div className="sectioncontainer">
        <h2>PLP Expert Content Espots</h2>
        <ul>
          <li>Identify categories with high consideration</li>
          <li>
            Listen to ride-along (or recorded) conversations with phone sales
            and/or in store sales
          </li>
          <li>Create teaser content that links to full article (if needed)</li>
          <li>Develop full article content</li>
        </ul>
        <img src={H1Page} alt="" />
      </div>

      <div className="sectioncontainer">
        <h2>Placeholder Images for Products</h2>
        <p>
          Placeholder images should be avoided. Not only does it steer users
          away from considering/purchasing the individual item, it also reduces
          the user's trust in the site as a whole. Need a new solution for
          Parts. Also, do we have other circumstances where product images are
          missing or using placeholders? Can we make this a requirement for
          publishing if it isn't already?
        </p>
        <img src={PlaceHolder} alt="" />
      </div>

      <div className="sectioncontainer">
        <h2>Main Image: Highlight Vital Product Features</h2>
        <img src={MainImage} alt="" />
      </div>

      <div className="sectioncontainer">
        <h2>Alternate Product Image 1: In-Use or Key Benefit Image</h2>
        <p>
          The alternate product image 1 should if possible be an in use or a
          benefits-driven descriptive image. This will allow the user to get
          more information about the product on the PLP when they hover over the
          main product image and it swaps out for alternate product image 1.
        </p>
        <div>
          <div>
            <h4 id="maintitle">Main Product Image</h4>
            <h4 id="alternatetitle">Alternate product image</h4>
            <h4 id="Or">OR</h4>
          </div>
          <img id="mainimage" src={MainProductImage} alt="" />
          <img className="alterimage" src={Alternate1} alt="" />
          <img className="alterimage" src={Alternate2} alt="" />
        </div>
      </div>

      <div>
        <h2>Product Badging</h2>
        <h3>Limit of Badges</h3>
        <p>
          There will be a prioritization for the types of badges displayed. For
          each individual product any badges past the third one will not
          display.
        </p>
        <p>
          When assigning badges to products we need consider the big picture. If
          all items have badges or multiple badges they lose meaning because
          they become noise and cancel each other out.
        </p>
      </div>

      <div className="sectioncontainer">
        <div>
          <div>
            <p id="leftside">New</p>
            <h3 style={{ margin: "0px 0px 20px -12px" }} id="rightside">
              New
            </h3>
            <p style={{ margin: "-20px 0px 0px 228px" }}>
              Turns on and off automatically based on the product's initial
              publish date.
            </p>
          </div>

          <div>
            <p style={{ width: "66px" }} id="leftside">
              ON SALE
            </p>
            <h3 style={{ margin: "0px 0px 20px -38px" }} id="rightside">
              On Sale/Clearance
            </h3>
            <p style={{ margin: "-20px 0px 0px 228px" }}>
              Driven based on... price or attribution?
            </p>
            <p style={{ width: "81px" }} id="leftside2">
              CLEARANCE
            </p>
          </div>

          <div>
            <p style={{ width: "116px" }} id="leftside">
              DEAL OF THE DAY
            </p>
            <h3 style={{ margin: "0px 0px 20px -87px" }} id="rightside">
              Deal of the Day
            </h3>
          </div>
        </div>

        <div>
          <p style={{ width: "87px" }} id="leftside">
            TOP SELLER
          </p>
          <h3 style={{ margin: "0px 0px 20px -58px" }} id="rightside">
            Top Seller
          </h3>
        </div>

        <div>
          <p style={{ width: "81px" }} id="leftside">
            TOP RATED
          </p>
          <h3 style={{ margin: "0px 0px 20px -52px" }} id="rightside">
            Top Rated
          </h3>
        </div>

        <div>
          <p style={{ width: "81px" }} id="leftside">
            EXCLUSIVE
          </p>
          <h3 style={{ margin: "0px 0px 20px -51px" }} id="rightside">
            Exclusive
          </h3>
        </div>

        <div>
          <p style={{ width: "85px" }} id="leftside">
            JUMBO SIZE
          </p>
          <h3 style={{ margin: "0px 0px 20px -55px" }} id="rightside">
            Jumbo Size
          </h3>
          <p style={{ margin: "-17px 0px 0px 230px" }}>
            For abnormally large items like special wrenches
          </p>
        </div>
      </div>

      <h3>Website current state</h3>
      <div>
        <img id='currentstate' src={CurrentState1} alt="" />
        <img id='currentstate' src={CurrentState2} alt="" />
        <img id='currentstate' src={CurrentState3} alt="" />
      </div>
    </>
  );
};
