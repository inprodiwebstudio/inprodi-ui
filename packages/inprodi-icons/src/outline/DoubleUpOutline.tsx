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
        d="M6.994 2.215a.438.438 0 0 0-.303.128L1.003 8.031a.438.438 0 1 0 .619.619L7 3.27l5.378 5.379a.438.438 0 1 0 .619-.62L7.309 2.344a.438.438 0 0 0-.315-.128Zm0 3.5a.438.438 0 0 0-.303.128l-5.688 5.688a.438.438 0 1 0 .619.618L7 6.771l5.378 5.378a.436.436 0 0 0 .72-.137.437.437 0 0 0-.101-.481L7.309 5.843a.438.438 0 0 0-.315-.128Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDoubleUpOutline);
