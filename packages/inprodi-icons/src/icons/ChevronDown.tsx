import * as React from "react";
import { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.75 3.351a.5.5 0 0 0-.858-.348l-6.14 6.141-6.142-6.14a.5.5 0 1 0-.706.706l6.494 6.494a.5.5 0 0 0 .706 0L14.6 3.71a.5.5 0 0 0 .151-.359Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronDown;
