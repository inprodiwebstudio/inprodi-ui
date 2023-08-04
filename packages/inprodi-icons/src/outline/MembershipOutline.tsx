import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMembershipOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.833 1.632A1.841 1.841 0 0 0 0 3.465v7.667a1.84 1.84 0 0 0 1.833 1.833h10.334A1.84 1.84 0 0 0 14 11.132V3.465a1.84 1.84 0 0 0-1.833-1.833H1.833Zm0 1h10.334c.466 0 .833.367.833.833v7.667a.826.826 0 0 1-.833.833H1.833A.826.826 0 0 1 1 11.132V3.465c0-.466.367-.833.833-.833Zm5.172 1.333a.5.5 0 0 0-.453.278l-.81 1.63-1.814.262a.5.5 0 0 0-.276.854l1.31 1.268-.309 1.79a.5.5 0 0 0 .724.528L7 9.728l1.623.847a.5.5 0 0 0 .724-.528l-.31-1.79 1.31-1.268a.5.5 0 0 0-.275-.854l-1.814-.262-.81-1.63a.5.5 0 0 0-.443-.278ZM7 5.59l.48.964a.5.5 0 0 0 .375.272l1.066.154-.769.743a.5.5 0 0 0-.144.444l.181 1.054-.958-.5a.5.5 0 0 0-.462 0l-.958.5.181-1.054a.5.5 0 0 0-.144-.444l-.769-.743 1.066-.154a.5.5 0 0 0 .376-.272L7 5.59Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMembershipOutline);
