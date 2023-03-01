import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDoubleUpOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.994 2.277a.438.438 0 0 0-.303.129L1.003 8.093a.438.438 0 1 0 .619.619L7 3.334l5.378 5.378a.438.438 0 1 0 .619-.619L7.309 2.406a.438.438 0 0 0-.315-.129Zm0 3.5a.438.438 0 0 0-.303.129l-5.688 5.687a.438.438 0 1 0 .619.619L7 6.834l5.378 5.378a.438.438 0 1 0 .619-.619L7.309 5.906a.438.438 0 0 0-.315-.129Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDoubleUpOutline);
