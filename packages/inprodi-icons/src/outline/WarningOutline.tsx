import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgWarningOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .774a1.56 1.56 0 0 0-1.384.797L.192 11.369c-.572 1.034.203 2.35 1.384 2.35h10.848c1.181 0 1.956-1.316 1.384-2.35L8.383 1.571A1.56 1.56 0 0 0 7 .774Zm0 1.014c.178 0 .356.097.464.292l5.424 9.798c.208.376-.036.79-.464.79H1.576c-.428 0-.672-.414-.464-.79L6.536 2.08A.531.531 0 0 1 7 1.788ZM6.99 4.602a.526.526 0 0 0-.517.533v3.503a.526.526 0 1 0 1.051 0V5.135a.526.526 0 0 0-.534-.533ZM7 10.215a.7.7 0 1 0 0 1.401.7.7 0 0 0 0-1.401Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgWarningOutline);
