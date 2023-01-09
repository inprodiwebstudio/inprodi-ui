import * as React from "react";
import { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.275 1.4A2.283 2.283 0 0 0 0 3.675v6.65A2.283 2.283 0 0 0 2.275 12.6h9.45A2.283 2.283 0 0 0 14 10.325v-6.65A2.283 2.283 0 0 0 11.725 1.4h-9.45Zm0 1.05h9.45c.683 0 1.225.542 1.225 1.225v.387L7 7.278 1.05 4.062v-.387c0-.682.542-1.225 1.225-1.225ZM1.05 5.255l5.7 3.082a.525.525 0 0 0 .5 0l5.7-3.082v5.07c0 .683-.542 1.225-1.225 1.225h-9.45a1.217 1.217 0 0 1-1.225-1.225v-5.07Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMail;
