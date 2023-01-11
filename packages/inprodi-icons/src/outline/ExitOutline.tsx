import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgExitOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.139.774A2.148 2.148 0 0 0 0 2.912v9.723c0 1.174.965 2.139 2.139 2.139h7a2.148 2.148 0 0 0 2.139-2.14.583.583 0 1 0-1.167 0 .964.964 0 0 1-.972.973h-7a.964.964 0 0 1-.972-.972V2.912c0-.543.428-.972.972-.972h7c.544 0 .972.429.972.972a.584.584 0 1 0 1.167 0A2.148 2.148 0 0 0 9.138.774h-7Zm8.55 3.688a.583.583 0 0 0-.407 1.002l1.726 1.726H3.694a.584.584 0 1 0 0 1.167h8.314l-1.726 1.726a.584.584 0 1 0 .825.825l2.722-2.722a.583.583 0 0 0 0-.825L11.107 4.64a.584.584 0 0 0-.419-.177Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgExitOutline);
