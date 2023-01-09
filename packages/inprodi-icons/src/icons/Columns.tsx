import * as React from "react";
import { SVGProps } from "react";
const SvgColumns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.147.6A2.148 2.148 0 0 0 .007 2.74v6.904a.583.583 0 0 0 0 .19v2.628c0 1.175.965 2.14 2.14 2.14h9.722a2.148 2.148 0 0 0 2.139-2.14V9.835a.583.583 0 0 0 0-.19V2.74A2.148 2.148 0 0 0 11.868.6H2.148Zm0 1.167h4.277v3.11h-5.25V2.74c0-.544.429-.972.973-.972Zm5.444 0h4.278c.544 0 .972.428.972.972v2.139h-5.25V1.767ZM1.174 6.045h5.25v3.11h-5.25v-3.11Zm6.417 0h5.25v3.11h-5.25v-3.11Zm-6.417 4.277h5.25v3.111H2.147a.964.964 0 0 1-.973-.972v-2.139Zm6.417 0h5.25v2.14a.964.964 0 0 1-.972.971H7.59v-3.11Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgColumns;
