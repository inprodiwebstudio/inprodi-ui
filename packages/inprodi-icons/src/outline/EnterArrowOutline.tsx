import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgEnterArrowOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M13.492 1.836a.5.5 0 0 0-.492.507v5a.826.826 0 0 1-.833.834H1.707l2.48-2.48a.5.5 0 1 0-.707-.707L.146 8.323a.5.5 0 0 0 0 .707l3.334 3.334a.5.5 0 1 0 .707-.707l-2.48-2.48h10.46A1.84 1.84 0 0 0 14 7.343v-5a.5.5 0 0 0-.508-.507Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgEnterArrowOutline);
