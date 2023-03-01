import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBetweenOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#BetweenOutline_svg__a)">
        <path
          d="M.517 1.986A.525.525 0 0 0 0 2.518v9.45a.525.525 0 1 0 1.05 0v-9.45a.525.525 0 0 0-.533-.532Zm12.95 0a.525.525 0 0 0-.517.532v9.45a.523.523 0 0 0 .728.492.524.524 0 0 0 .322-.492v-9.45a.524.524 0 0 0-.533-.532Zm-10.842.007a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm-7.18 2.793a.525.525 0 0 0-.366.161L1.904 6.872a.525.525 0 0 0 0 .743L3.829 9.54a.525.525 0 1 0 .742-.743L3.542 7.768h6.916l-1.03 1.03a.525.525 0 1 0 .743.742l1.925-1.925a.525.525 0 0 0 0-.743l-1.925-1.925a.526.526 0 1 0-.742.743l1.029 1.028H3.542l1.03-1.028a.525.525 0 0 0-.377-.904Zm-1.57 6.657a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm1.75 0a.525.525 0 1 0 0 1.051.525.525 0 0 0 0-1.05Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="BetweenOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgBetweenOutline);
