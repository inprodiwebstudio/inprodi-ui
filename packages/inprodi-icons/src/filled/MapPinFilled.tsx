import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMapPinFilled(props: SVGProps<SVGSVGElement>) {
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
        opacity={0.35}
        d="M7 8.105a2.947 2.947 0 1 0 0-5.894 2.947 2.947 0 0 0 0 5.894ZM13.557 12.586l-.352-.881a2.212 2.212 0 0 0-2.053-1.39H2.848a2.21 2.21 0 0 0-2.053 1.39l-.352.882A1.03 1.03 0 0 0 1.4 14h11.2c.728 0 1.227-.737.957-1.414Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M7 0a5.158 5.158 0 0 0-5.158 5.158c0 2.039 2.064 4.852 3.58 6.644.825.974 2.33.974 3.155 0 1.517-1.792 3.58-4.605 3.58-6.644A5.158 5.158 0 0 0 7 0Zm0 7a1.842 1.842 0 1 1 0-3.684A1.842 1.842 0 0 1 7 7Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMapPinFilled);
