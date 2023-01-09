import * as React from "react";
import { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .6c-3.86 0-7 3.14-7 7s3.14 7 7 7a7 7 0 0 0 6.234-3.825.526.526 0 0 0-.412-.761A6.12 6.12 0 0 1 7.35 3.925c0-.914.205-1.777.565-2.558a.525.525 0 0 0-.44-.744C7.334.613 7.176.6 7 .6Zm-.293 1.08c-.239.71-.407 1.453-.407 2.245 0 3.407 2.395 6.239 5.586 6.967C10.82 12.475 9.057 13.55 7 13.55A5.942 5.942 0 0 1 1.05 7.6c0-3.192 2.504-5.765 5.657-5.92Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMoon;
