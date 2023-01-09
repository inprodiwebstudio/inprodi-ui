import * as React from "react";
import { SVGProps } from "react";
const SvgLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.013 0a.583.583 0 0 0-.401.176L.171 5.618a.583.583 0 0 0 0 .824l5.44 5.441a.584.584 0 1 0 .825-.824L1.99 6.613H13.41a.582.582 0 1 0 0-1.166H1.99L6.436 1a.583.583 0 0 0-.423-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLeftArrow;
