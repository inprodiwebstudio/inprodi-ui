import * as React from "react";
import { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .6a1.56 1.56 0 0 0-1.384.797L.192 11.195c-.572 1.034.203 2.35 1.384 2.35h10.848c1.181 0 1.956-1.316 1.384-2.35L8.383 1.397A1.56 1.56 0 0 0 7 .6Zm0 1.015c.178 0 .356.097.464.291l5.424 9.799c.208.375-.036.789-.464.789H1.576c-.428 0-.672-.414-.464-.79l5.424-9.798A.531.531 0 0 1 7 1.615ZM6.99 4.428a.526.526 0 0 0-.517.533v3.504a.526.526 0 1 0 1.051 0V4.96a.526.526 0 0 0-.534-.533ZM7 10.041a.7.7 0 1 0 0 1.401.7.7 0 0 0 0-1.4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWarning;
