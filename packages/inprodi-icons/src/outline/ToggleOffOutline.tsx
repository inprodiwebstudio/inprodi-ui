import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgToggleOffOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.818 3.382a.478.478 0 0 0-.055.003A3.824 3.824 0 0 0 0 7.2a3.824 3.824 0 0 0 3.818 3.818h6.364A3.825 3.825 0 0 0 14 7.2a3.825 3.825 0 0 0-3.818-3.818H3.818Zm0 .954A2.856 2.856 0 0 1 6.682 7.2a2.856 2.856 0 0 1-2.864 2.864A2.856 2.856 0 0 1 .955 7.2a2.856 2.856 0 0 1 2.863-2.864Zm2.515 0h3.849A2.856 2.856 0 0 1 13.046 7.2a2.856 2.856 0 0 1-2.864 2.864H6.333A3.807 3.807 0 0 0 7.636 7.2c0-1.14-.506-2.163-1.303-2.864Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgToggleOffOutline);
