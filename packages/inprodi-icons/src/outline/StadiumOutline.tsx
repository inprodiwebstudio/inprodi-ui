import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStadiumOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.833 1.507A1.841 1.841 0 0 0 0 3.34v7.667a1.84 1.84 0 0 0 1.833 1.833h10.334A1.84 1.84 0 0 0 14 11.007V3.34a1.84 1.84 0 0 0-1.833-1.833H1.833Zm0 1H6.5v2.049a2.676 2.676 0 0 0-2.167 2.618c0 1.295.937 2.382 2.167 2.617v2.05H1.833A.826.826 0 0 1 1 11.006v-1.5h1.167c.638 0 1.166-.528 1.166-1.167V6.007c0-.638-.528-1.167-1.166-1.167H1v-1.5c0-.466.367-.833.833-.833Zm5.667 0h4.667c.466 0 .833.367.833.833v1.5h-1.167c-.638 0-1.166.529-1.166 1.167V8.34c0 .639.528 1.167 1.166 1.167H13v1.5a.826.826 0 0 1-.833.833H7.5V9.791a2.676 2.676 0 0 0 2.167-2.617A2.676 2.676 0 0 0 7.5 4.556v-2.05Zm-1 3.084v3.165a1.652 1.652 0 0 1-1.167-1.582c0-.751.49-1.372 1.167-1.583Zm1 0a1.652 1.652 0 0 1 1.167 1.583c0 .75-.49 1.37-1.167 1.582V5.591ZM1 5.84h1.167a.16.16 0 0 1 .166.166V8.34a.16.16 0 0 1-.166.167H1V5.84Zm10.833 0H13v2.666h-1.167a.16.16 0 0 1-.166-.167V6.007a.16.16 0 0 1 .166-.167Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgStadiumOutline);