import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPaperOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.575-.313C1.711-.313 1 .398 1 1.262v10.85c0 .863.711 1.575 1.575 1.575h8.05c.864 0 1.575-.712 1.575-1.575V1.262c0-.864-.711-1.575-1.575-1.575h-8.05Zm0 1.05h8.05c.296 0 .525.228.525.525v10.85a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525V1.262c0-.297.229-.525.525-.525Zm1.75 1.75a.525.525 0 1 0 0 1.05h1.75a.525.525 0 1 0 0-1.05h-1.75Zm0 3.15a.525.525 0 1 0 0 1.05h4.55a.525.525 0 1 0 0-1.05h-4.55Zm0 2.1a.525.525 0 1 0 0 1.05h4.55a.525.525 0 1 0 0-1.05h-4.55Zm0 2.1a.525.525 0 1 0 0 1.05h3.15a.526.526 0 1 0 0-1.05h-3.15Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPaperOutline);
