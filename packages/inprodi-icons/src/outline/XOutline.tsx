import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgXOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M13.368.236a.617.617 0 0 0-.43.19L7 6.364 1.062.426a.617.617 0 1 0-.872.872l5.938 5.938L.19 13.174a.617.617 0 1 0 .872.872L7 8.108l5.938 5.938a.617.617 0 1 0 .872-.872L7.872 7.236l5.938-5.938a.617.617 0 0 0-.442-1.062Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgXOutline);
