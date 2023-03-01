import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBoxesOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.675 1.062a.525.525 0 0 0-.525.525v4.55c0 .32.1.609.24.875H.524A.525.525 0 0 0 0 7.537v4.55c0 1.057.868 1.925 1.925 1.925H5.6c.555 0 1.048-.247 1.4-.627.352.38.845.627 1.4.627h3.675A1.933 1.933 0 0 0 14 12.087v-4.55a.525.525 0 0 0-.525-.525h-3.214c.14-.266.239-.555.239-.875v-4.55a.525.525 0 0 0-.525-.525h-6.3Zm.525 1.05h5.25v4.025c0 .49-.386.875-.875.875h-3.5a.867.867 0 0 1-.875-.875V2.112Zm1.925 1.05a.525.525 0 1 0 0 1.05h1.4a.525.525 0 1 0 0-1.05h-1.4Zm-5.075 4.9H6.475v4.025c0 .49-.386.875-.875.875H1.925a.867.867 0 0 1-.875-.875V8.062Zm6.475 0h5.425v4.025c0 .49-.386.875-.875.875H8.4a.867.867 0 0 1-.875-.875V8.062Zm-4.55 1.05a.525.525 0 1 0 0 1.05h1.4a.526.526 0 1 0 0-1.05h-1.4Zm6.65 0a.525.525 0 1 0 0 1.05h1.4a.526.526 0 1 0 0-1.05h-1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBoxesOutline);
