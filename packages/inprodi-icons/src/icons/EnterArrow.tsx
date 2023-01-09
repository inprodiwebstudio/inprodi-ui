import * as React from "react";
import { SVGProps } from "react";
const SvgEnterArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.492 1.6a.5.5 0 0 0-.492.507v5a.826.826 0 0 1-.833.834H1.707l2.48-2.48a.5.5 0 1 0-.707-.707L.146 8.087a.5.5 0 0 0 0 .707l3.334 3.333a.5.5 0 1 0 .707-.707l-2.48-2.48h10.46A1.841 1.841 0 0 0 14 7.108v-5a.5.5 0 0 0-.508-.507Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEnterArrow;
