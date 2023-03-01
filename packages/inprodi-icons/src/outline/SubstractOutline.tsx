import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSubstractOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.56 7.062a.603.603 0 0 0-.214.036.56.56 0 0 0-.182.108.5.5 0 0 0-.121.163.46.46 0 0 0 0 .386.5.5 0 0 0 .121.163.56.56 0 0 0 .182.108c.068.025.14.037.214.036h12.88a.603.603 0 0 0 .214-.036.56.56 0 0 0 .181-.108.5.5 0 0 0 .122-.163.459.459 0 0 0 0-.386.5.5 0 0 0-.122-.163.56.56 0 0 0-.181-.108.603.603 0 0 0-.214-.036H.56Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSubstractOutline);
