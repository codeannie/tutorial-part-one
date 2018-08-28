import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ color: "tomato" }}>
    <h1>Hello world!</h1>
    <p> This is a test! </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      {/* <Link to="/news/page-2">Page 2</Link> */}
      <Link to="/page-2">Page 2</Link>
    </div>
    <div>
      {/* <Link to="/news/counter">Counter</Link> */}
      <Link to="/counter">Counter</Link>
    </div>
  </div>
);
