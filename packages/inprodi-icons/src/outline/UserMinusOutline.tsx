import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUserMinusOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#UserMinusOutline_svg__a)">
        <path
          d="M4.693.174a3.19 3.19 0 0 0-3.182 3.181 3.19 3.19 0 0 0 3.182 3.182 3.19 3.19 0 0 0 3.182-3.182A3.19 3.19 0 0 0 4.693.174Zm0 .954a2.22 2.22 0 0 1 2.228 2.227 2.22 2.22 0 0 1-2.228 2.228 2.22 2.22 0 0 1-2.227-2.228 2.22 2.22 0 0 1 2.227-2.227Zm5.728 6.046a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-9.157.636C.611 7.81.08 8.378.08 9.076v.484c0 1.044.539 1.951 1.519 2.554.824.508 1.923.787 3.094.787a6.74 6.74 0 0 0 2.062-.315c-.147-.28-.26-.58-.34-.894-.54.17-1.137.254-1.722.254-1.762 0-3.659-.746-3.659-2.386v-.484c0-.17.105-.312.23-.312h5.49c.182-.35.414-.671.686-.954H1.264Zm7.566.954c.081 0 .162.031.225.094l1.366 1.366 1.365-1.366a.318.318 0 1 1 .45.45l-1.366 1.366 1.366 1.366a.318.318 0 1 1-.45.45l-1.365-1.367-1.366 1.366a.317.317 0 0 1-.45 0 .318.318 0 0 1 0-.45l1.366-1.365-1.366-1.366a.318.318 0 0 1 .225-.544Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="UserMinusOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUserMinusOutline);
