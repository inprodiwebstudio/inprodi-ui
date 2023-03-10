import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCashRegisterOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Cash_RegisterOutline_svg__a)">
        <path
          d="M2.985.236a.525.525 0 0 0-.535.525v1.64C1.45 2.64.7 3.54.7 4.61v7.35a2.283 2.283 0 0 0 2.275 2.275h8.05A2.283 2.283 0 0 0 13.3 11.96V4.61c0-1.07-.75-1.971-1.75-2.21V.76a.525.525 0 0 0-.738-.48L9.5.864l-.809-.54a.525.525 0 0 0-.526-.033L7 .874 5.834.29a.525.525 0 0 0-.525.033l-.81.54L3.19.281a.525.525 0 0 0-.204-.045Zm2.653 1.13 1.127.565a.525.525 0 0 0 .47 0l1.127-.564.797.53a.525.525 0 0 0 .504.044l.837-.372v1.206a.523.523 0 0 0 0 .17v1.84h-7V2.948a.526.526 0 0 0 0-.17V1.569l.837.372a.525.525 0 0 0 .504-.043l.797-.531ZM2.45 3.507v1.805a.525.525 0 0 0 .525.525h8.05a.525.525 0 0 0 .525-.525V3.506c.414.195.7.612.7 1.105v6.125H1.75V4.61c0-.493.285-.91.7-1.105Zm2.1 3.03a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-4.9 2.1a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm2.45 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-7.7 3.15h10.5v.175c0 .682-.543 1.225-1.225 1.225H7.699a.7.7 0 1 0-1.398 0H2.975A1.217 1.217 0 0 1 1.75 11.96v-.175Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="Cash_RegisterOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCashRegisterOutline);
