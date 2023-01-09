import * as React from "react";
import { SVGProps } from "react";
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.575.6C3.711.6 3 1.311 3 2.175v10.85c0 .864.711 1.575 1.575 1.575h5.25c.864 0 1.575-.711 1.575-1.575V2.175C11.4 1.311 10.689.6 9.825.6h-5.25Zm0 1.05h5.25c.296 0 .525.229.525.525v10.85a.517.517 0 0 1-.525.525h-5.25a.517.517 0 0 1-.525-.525V2.175c0-.296.229-.525.525-.525Zm2.625 9.8a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSmartphone;
