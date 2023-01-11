import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSmartphoneOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M4.575-.313C3.711-.313 3 .398 3 1.262v10.85c0 .863.711 1.575 1.575 1.575h5.25c.864 0 1.575-.712 1.575-1.575V1.262c0-.864-.711-1.575-1.575-1.575h-5.25Zm0 1.05h5.25c.296 0 .525.228.525.525v10.85a.517.517 0 0 1-.525.525h-5.25a.517.517 0 0 1-.525-.525V1.262c0-.297.229-.525.525-.525Zm2.625 9.8a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSmartphoneOutline);
