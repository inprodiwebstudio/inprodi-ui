import * as React from "react";
import { SVGProps } from "react";
const SvgPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.575.6C1.711.6 1 1.311 1 2.175v10.85c0 .864.711 1.575 1.575 1.575h8.05c.864 0 1.575-.711 1.575-1.575V2.175C12.2 1.311 11.489.6 10.625.6h-8.05Zm0 1.05h8.05c.296 0 .525.229.525.525v10.85a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525V2.175c0-.296.229-.525.525-.525Zm1.75 1.75a.525.525 0 1 0 0 1.05h1.75a.525.525 0 1 0 0-1.05h-1.75Zm0 3.15a.525.525 0 1 0 0 1.05h4.55a.525.525 0 1 0 0-1.05h-4.55Zm0 2.1a.525.525 0 1 0 0 1.05h4.55a.525.525 0 1 0 0-1.05h-4.55Zm0 2.1a.524.524 0 0 0-.376.899.527.527 0 0 0 .376.151h3.15a.526.526 0 1 0 0-1.05h-3.15Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPaper;
