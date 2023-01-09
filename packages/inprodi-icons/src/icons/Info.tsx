import * as React from "react";
import { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.55 5.942 5.942 0 0 1 1.05 7.6 5.942 5.942 0 0 1 7 1.65ZM7 4.1a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-.008 2.443a.525.525 0 0 0-.517.532v3.85a.525.525 0 1 0 1.05 0v-3.85a.525.525 0 0 0-.533-.532Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInfo;
