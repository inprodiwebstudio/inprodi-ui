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
        d="M7 .836a1.56 1.56 0 0 0-1.384.797L.192 11.432c-.572 1.033.203 2.349 1.384 2.349h10.848c1.181 0 1.956-1.316 1.384-2.35L8.383 1.634A1.56 1.56 0 0 0 7 .836Zm0 1.015c.178 0 .356.097.464.291l5.424 9.799c.208.375-.036.789-.464.789H1.576c-.428 0-.672-.414-.464-.79l5.424-9.798A.531.531 0 0 1 7 1.851ZM6.99 4.664a.526.526 0 0 0-.517.533v3.504a.526.526 0 1 0 1.051 0V5.197a.526.526 0 0 0-.534-.533ZM7 10.277a.7.7 0 1 0 0 1.402.7.7 0 0 0 0-1.402Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgWarningOutline);
