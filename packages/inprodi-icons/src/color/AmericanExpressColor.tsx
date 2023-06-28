import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgAmericanExpressColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 10.667c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 0 1 0 10.667V3.333C0 2.597.597 2 1.333 2h11.334C13.403 2 14 2.597 14 3.333v7.334Z"
        fill="#1976D2"
      />
      <path
        d="m5.935 6-.683 1.338L4.572 6H3.7v1.922L2.728 6h-.736L1 7.995h.587l.217-.446h1.11l.221.446h1.121V6.513L5 7.995h.506l.76-1.456v1.456h.558V6h-.889Zm-3.92 1.119.331-.698.345.698h-.677Zm8.977-.144L12 6.005h-.717l-.645.618L10.014 6h-2.22v1.995h2.147l.677-.66.66.665h.715l-1.001-1.025Zm-1.345.601H8.35v-.395H9.59v-.378H8.35V6.43l1.37.003.547.542-.62.601Z"
        fill="#fff"
      />
    </svg>
  );
}
export default IconHoc(SvgAmericanExpressColor);
