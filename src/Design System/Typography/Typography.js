import React from "react";
import H1 from "./Typography_Images/H1.svg";
import "./Typography.css";

//H1 Heading
export const H1Title = () => {
  return (
    <div>
      <span id="h1HeadingText">H1 Heading</span>
      <img id="h1image" src={H1} alt="48px high" rotate="90" />
      <span id="imageLabel">48px high</span>
    </div>
  );
};

export const H1Fontname = () => {
  return (
    <div>
      <span id="fontName">Proxima Nova Condensed Bold</span>
    </div>
  );
};

export const H1Attribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>XL - MD 48px/48 line height</p>
          <p>SM 44px/44 line height</p>
          <p>XS 40px/40 line height</p>
          <p>Margin bottom 48px</p>
        </div>
      </p>
    </div>
  );
};

//H2 SubHeading
export const H2Title = () => {
  return (
    <div>
      <span id="h2HeadingText">H2 Subheading</span>
      <img id="h2image" src={H1} alt="24px high" />
      <span id="imageLabel">24px high</span>
    </div>
  );
};

export const H2Fontname = () => {
  return (
    <div>
      <span id="fontName">Proxima Nova Bold</span>
    </div>
  );
};

export const H2Attribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>24px/24 line height</p>
          <p>Margin bottom 24px</p>
        </div>
      </p>
    </div>
  );
};

//H3 SubHeading
export const H3Title = () => {
  return (
    <div>
      <span id="h3HeadingText">H3 Subheading</span>
      <img id="h3image" src={H1} alt="24px high" />
      <span id="imageLabel">24px high</span>
    </div>
  );
};

export const H3Fontname = () => {
  return (
    <div>
      <span id="fontName">Proxima Nova Bold</span>
    </div>
  );
};

export const H3Attribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>18px/24 line height</p>
          <p>Margin bottom 24px</p>
        </div>
      </p>
    </div>
  );
};

//Body Copy
export const BodyTitle = () => {
  return (
    <div>
      <span id="bodyText">H3 Subheading</span>
      <img id="bodyimage" src={H1} alt="16px high" />
      <span id="imageLabel">16px high</span>
      <p id="bodyp">
        Max-width of body copy (article html element) should be no more than
        560px wide; see https://baymard.com/blog/line-length-readability
      </p>
    </div>
  );
};

export const BodyFontname = () => {
  return (
    <div>
      <span id="fontName">Arial</span>
    </div>
  );
};

export const BodyAttribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>XL - MD 16px/ 24 line height</p>
          <p>Margin bottom 16px</p>
        </div>
      </p>
    </div>
  );
};

//Small body copy
export const SmallBodyTitle = () => {
  return (
    <div>
      <span id="smallbodyText">Small body copy</span>
      <img id="smallbodyimage" src={H1} alt="16px high" />
      <span id="imageLabel">16px high</span>
    </div>
  );
};

export const SmallBodyFontname = () => {
  return (
    <div>
      <span id="fontName">Arial</span>
    </div>
  );
};

export const SmallBodyAttribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>SM - XS 14px/ 20 line height</p>
          <p>Margin bottom 16px</p>
        </div>
      </p>
    </div>
  );
};

//H2 Subheading for Promotional Copy
export const H2SubHeadingProTitle = () => {
  return (
    <div>
      <span id="h2headingproText">H2 Subheading for Promotional Copy</span>
      <img id="h2headingproimage" src={H1} alt="24px high" />
      <span id="imageLabel">24px high</span>
      <p id='h2headingpropara'>
        Promotional body copy. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus blandit ex in libero lobortis, in feugiat
        lorem vehicula. Nam eu tellus vel mi ultricies ultrices a in odio.
        Quisque et blandit libero.
      </p>
      <img id="h2headingproimage2" src={H1} alt="16px high" />
      <span id="imageLabel">16px high</span>
    </div>
  );
};

export const H2SubHeadingProFontname = () => {
  return (
    <div>
      <span id="fontName">Proxima Nova</span>
    </div>
  );
};

export const H2SubHeadingProAttribute = () => {
  return (
    <div>
      <p>
        <div>
          <p>XL - XS 18px/ 24 line height</p>
          <p>Margin bottom 16px</p>
        </div>
      </p>
    </div>
  );
};
