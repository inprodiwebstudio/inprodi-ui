import * as React from "react";
import { SVGProps } from "react";
const SvgRandom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.66.6a.525.525 0 0 0-.366.9l1.203 1.204H1.923C.863 2.704 0 3.567 0 4.627v5.644l1.049-1.05V4.628c0-.483.392-.874.874-.874h9.574l-1.203 1.202a.525.525 0 1 0 .742.742l2.098-2.098a.524.524 0 0 0 0-.742L11.036.76A.525.525 0 0 0 10.66.6Zm2.628 4.327-1.05 1.05v4.594a.875.875 0 0 1-.874.874H1.791l1.202-1.202a.525.525 0 1 0-.741-.742L.154 11.6a.525.525 0 0 0 0 .742l2.098 2.098a.524.524 0 1 0 .741-.742l-1.202-1.202h9.573c1.06 0 1.924-.864 1.924-1.924V4.927Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRandom;
