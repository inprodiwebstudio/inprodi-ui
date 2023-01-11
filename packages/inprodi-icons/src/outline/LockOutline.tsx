import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLockOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 .174c-1.54 0-2.8 1.26-2.8 2.8v1.4H2.975c-.864 0-1.575.71-1.575 1.575v6.65c0 .863.711 1.575 1.575 1.575h8.05c.864 0 1.575-.712 1.575-1.575v-6.65c0-.864-.711-1.575-1.575-1.575H9.8v-1.4c0-1.54-1.26-2.8-2.8-2.8Zm0 1.05c.973 0 1.75.777 1.75 1.75v1.4h-3.5v-1.4c0-.973.777-1.75 1.75-1.75Zm-4.025 4.2h8.05c.296 0 .525.228.525.525v6.65a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525v-6.65c0-.297.229-.525.525-.525ZM7 8.224a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgLockOutline);
