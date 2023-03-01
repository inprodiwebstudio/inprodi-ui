import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChevronUpOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.994 3.59a.438.438 0 0 0-.303.128L1.003 9.406a.438.438 0 1 0 .619.618L7 4.646l5.378 5.378a.438.438 0 1 0 .619-.618L7.309 3.718a.438.438 0 0 0-.315-.128Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChevronUpOutline);
