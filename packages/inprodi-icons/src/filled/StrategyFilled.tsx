import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStrategyFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.724 11.781H2.109a1.11 1.11 0 0 0 0 2.219h9.615a1.11 1.11 0 0 0 0-2.219Z"
        fill={props.color || `currentColor`}
      />
      <path
        opacity={0.35}
        d="M11.354 11.781v-.018c0-.851-.453-1.627-1.17-2.085-1.083-.693-2.528-1.964-2.528-3.813h2.219a1.479 1.479 0 0 0 .887-2.663L8.396 1.427v-.68a.744.744 0 0 0-.841-.74 5.918 5.918 0 0 0-5.076 5.858v5.916h8.875Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgStrategyFilled);
