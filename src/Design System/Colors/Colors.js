import React from "react";

import "./Colors.css";

export const PrimaryColors = () => {
  return (
    <div>
      <h2 id="title">Primary</h2>
      <div className="squarebox">
        <div className="blackcolor">
          <div className="textInbox">
            <p>
              <span>Black</span>
            </p>
            <p>
              <span id="code">#000000</span>
            </p>
          </div>
        </div>

        <div className="accentcolor">
          <div className="textInbox">
            <p>
              <span>Accent</span>
            </p>
            <p>
              <span id="code">#f5b100</span>
            </p>
          </div>
        </div>

        <div className="calltoActioncolor">
          <div className="textInbox">
            <p>
              <span>Call to Action</span>
            </p>
            <p>
              <span id="code">#990000</span>
            </p>
          </div>
        </div>

        <div className="linkcolor">
          <div className="textInbox">
            <p>
              <span>Link</span>
            </p>
            <p>
              <span id="code">#1460aa</span>
            </p>
          </div>
        </div>

        <div className="linkOnBgcolor">
          <div className="textInbox">
            <p>
              <span>Link (on black bg)</span>
            </p>
            <p>
              <span id="code">#0b91cf</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MessagingColor = () => {
  return (
    <div>
      <h2 id="messagetitle">Messaging</h2>
      <div className="squarebox">
        <div className="informationcolor">
          <div className="textInbox">
            <p>
              <span>Information</span>
            </p>
            <p>
              <span id="code">#85620b</span>
            </p>
          </div>
        </div>

        <div className="informationBGcolor">
          <div className="textInbox">
            <p>
              <span>Information BG</span>
            </p>
            <p>
              <span id="code">#faebbf</span>
            </p>
          </div>
        </div>

        <div className="successcolor">
          <div className="textInbox">
            <p>
              <span>Success</span>
            </p>
            <p>
              <span id="code">#008500</span>
            </p>
          </div>
        </div>

        <div className="warningcolor">
          <div className="textInbox">
            <p>
              <span>Warning</span>
            </p>
            <p>
              <span id="code">#e00000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NeutralsColor = () => {
  return (
    <div>
      <h2 id="neutralstitle">Neutrals</h2>
      <div className="squarebox">
        <div className="gray1color">
          <div className="textInbox">
            <p>
              <span>Gray 1</span>
            </p>
            <p>
              <span id="code">#505050</span>
            </p>
          </div>
        </div>

        <div className="gray2color">
          <div className="textInbox">
            <p>
              <span>Gray 2</span>
            </p>
            <p>
              <span id="code">#898989</span>
            </p>
          </div>
        </div>

        <div className="gray3color">
          <div className="textInbox">
            <p>
              <span>Gray 3</span>
            </p>
            <p>
              <span id="code">#c8c8c8</span>
            </p>
          </div>
        </div>

        <div className="gray4color">
          <div className="textInbox">
            <p>
              <span>Gray 4</span>
            </p>
            <p>
              <span id="code">#e5e5e5</span>
            </p>
          </div>
        </div>

        <div className="gray5color">
          <div className="textInbox">
            <p>
              <span>Gray 5</span>
            </p>
            <p>
              <span id="code">#f2f2f2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OtherColor = () => {
  return (
    <div>
      <h2 id="othertitle">Other</h2>
      <div className="squarebox">
        <div className="careerscolor">
          <div className="textInbox">
            <p>
              <span>Careers</span>
            </p>
            <p>
              <span id="code">#0b91cf</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ACC = () => {
  return (
    <div className='ACCContainer'>
      <h2>Accessibility Color Contrast</h2>
      <p>
        A360 reviewed the colors we selected and said, "The color contrast
        appeared sufficient in the designs we reviewed." Here is some
        documentation from the A360 Hub on color contrast.
      </p>
      <ol>
        <li>
          Color Contrast Guide for Text
          https://hub.accessible360.com/kb/articles/862
        </li>

        <li>
          Color Contrast Guide for UI Components, Infographics, Charts, and
          Graphs https://hub.accessible360.com/kb/articles/863
        </li>
        <li>
          Tools for Measuring, Analyzing, and Understanding Color Contrast
          https://hub.accessible360.com/kb/articles/864
        </li>
      </ol>
    </div>
  );
};
