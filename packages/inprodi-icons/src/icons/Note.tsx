import * as React from "react";
import { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.75.6C.79.6 0 1.39 0 2.35v10.5c0 .96.79 1.75 1.75 1.75h7.389a.583.583 0 0 0 .418-.177l4.272-4.272c.11-.109.171-.257.171-.412V2.35C14 1.39 13.21.6 12.25.6H1.75Zm0 1.167h10.5c.33 0 .583.254.583.583v6.806h-2.527c-.96 0-1.75.79-1.75 1.75v2.527H1.75a.575.575 0 0 1-.583-.583V2.35c0-.33.254-.583.583-.583ZM3.694 3.71a.584.584 0 1 0 0 1.167h6.612a.583.583 0 1 0 0-1.167H3.694Zm0 2.723a.584.584 0 1 0 0 1.166H8.75a.584.584 0 1 0 0-1.166H3.694Zm6.612 3.89h1.703l-2.287 2.286v-1.703c0-.33.254-.584.584-.584Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgNote;
