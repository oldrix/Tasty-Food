import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className="wrapperOfPizza">
    <ContentLoader
      speed={2}
      width={300}
      height={500}
      viewBox="0 0 300 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="11" rx="0" ry="0" width="266" height="266" />
      <rect x="8" y="290" rx="0" ry="0" width="266" height="32" />
      <rect x="8" y="333" rx="9" ry="9" width="266" height="66" />
      <rect x="10" y="422" rx="0" ry="0" width="60" height="27" />
      <rect x="124" y="411" rx="30" ry="30" width="150" height="45" />
    </ContentLoader>
  </div>
);

export default MyLoader;
