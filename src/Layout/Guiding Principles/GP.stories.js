import React from "react";

export default {
  title: "Layout/Guiding Principles",
};

export const GuidingPrinciples = () => {
  return (
    <div className = 'container'>
      <h3>Content</h3>
      <ul>
        <li>Collapse or relocate rather than remove content from any views</li>
        <ul>
          <li>
            <b>Exception</b>: functionality that doesn't work with that device.
          </li>
          <li>
            <b>Exception</b>: click to call (mobile), print (desktop), hover
            (desktop)
          </li>
        </ul>
        <li>
          Keept it simple - maintain one base style across all views and
          progressively enhance larger views when there's a business case to do
          so
        </li>
        <ul>
          <li>Promotional content, Brand pages</li>
        </ul>
      </ul>

      <h3>Interactive Elements</h3>
      <ul>
        <li>
          Use menu element for drop downs (over drawer) and set it to max width
          on XS view
        </li>
        <li>
          Use caret icon to collapse sections for XS and SM breakpoints for
          non-essential text, but also it on MD and larger for long pages
        </li>
        <li>
          Use enlarged hit areas for all links, buttons and form elements for
          improved mobile usability
        </li>
      </ul>

      <h3>Styling</h3>
      <ul>
        <li>
          Horizontal rules - Avoid use of horizontal rules unless necessary to
          indicate a discrete section, particularly one that collapses, rather
          use white space to separate page areas
        </li>
        <li>
          Text should be html and not part of images for seo and accessibility
        </li>
        <ul>
          <li>
            <b>Exception</b>: home page promo
          </li>
        </ul>
      </ul>
    </div>
  );
};
