import * as React from "react";
import { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.991.6a.552.552 0 0 0-.543.56v5.888H.56a.552.552 0 1 0 0 1.104h5.888v5.888a.552.552 0 1 0 1.104 0V8.152h5.888a.552.552 0 1 0 0-1.104H7.552V1.16a.552.552 0 0 0-.56-.56Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlus;
