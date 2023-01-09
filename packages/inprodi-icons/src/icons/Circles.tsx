import * as React from "react";
import { SVGProps } from "react";
const SvgCircles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.55 5.942 5.942 0 0 1 1.05 7.6 5.942 5.942 0 0 1 7 1.65Zm0 2.8A3.158 3.158 0 0 0 3.85 7.6 3.158 3.158 0 0 0 7 10.75a3.158 3.158 0 0 0 3.15-3.15A3.158 3.158 0 0 0 7 4.45ZM7 5.5c1.166 0 2.1.934 2.1 2.1S8.166 9.7 7 9.7s-2.1-.934-2.1-2.1.934-2.1 2.1-2.1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCircles;
