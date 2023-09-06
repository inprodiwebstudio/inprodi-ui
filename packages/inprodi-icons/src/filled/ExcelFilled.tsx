import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgExcelFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#ExcelFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M13.3 2.82H7.7v8.4h5.6v-8.4ZM6.323.875a.697.697 0 0 0-.16.013l-5.6 1.121A.699.699 0 0 0 0 2.695v8.652a.7.7 0 0 0 .564.686l5.6 1.121A.7.7 0 0 0 7 12.466V1.576a.7.7 0 0 0-.677-.7Z"
        />
        <path d="M2.407 4.429c.218 0 .416.132.5.333l.508 1.217c.052.127.091.274.132.44h.017c.024-.1.07-.252.141-.452l.588-1.254a.493.493 0 1 1 .885.44l-.972 1.845.984 1.843a.526.526 0 1 1-.941.467l-.638-1.386a1.418 1.418 0 0 1-.093-.344h-.011c-.017.08-.052.2-.105.36L2.75 9.329a.495.495 0 0 1-.45.284h-.06a.496.496 0 0 1-.433-.735l1.036-1.86-.92-1.802a.542.542 0 0 1 .484-.787ZM13.3 2.12H7v9.8h6.3a.7.7 0 0 0 .7-.7v-8.4a.7.7 0 0 0-.7-.7Zm-3.5 8.4H8.4v-1.4h1.4v1.4Zm0-2.8H8.4v-1.4h1.4v1.4Zm0-2.8H8.4v-1.4h1.4v1.4Zm2.8 5.6h-1.4v-1.4h1.4v1.4Zm0-2.8h-1.4v-1.4h1.4v1.4Zm0-2.8h-1.4v-1.4h1.4v1.4Z" />
      </g>
      <defs>
        <clipPath id="ExcelFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgExcelFilled);
