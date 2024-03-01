import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBrokenOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#BrokenOutline_svg__a)">
        <path
          d="M7.371.174a.5.5 0 0 0-.085.006H3.943a.838.838 0 0 0-.815.658L2.05 5.854a.484.484 0 0 0-.006.024C1.84 7.13 2.361 8.32 3.283 9.155c.814.739 1.948 1.202 3.217 1.305v2.289l-2.42.427a.5.5 0 0 0 .086.99h2.752a.496.496 0 0 0 .162 0h2.754a.5.5 0 0 0 .086-.99l-2.42-.427V10.46c1.269-.103 2.403-.566 3.217-1.305.922-.835 1.444-2.025 1.239-3.276a.419.419 0 0 0-.006-.025L10.872.838a.839.839 0 0 0-.815-.658H7.44a.5.5 0 0 0-.069-.006ZM4.078 1.179H6.58L5.38 3.802a.499.499 0 0 0 .454.707h1.554l-.744 1.624a.5.5 0 1 0 .91.416L8.62 4.218a.499.499 0 0 0-.454-.708H6.613l1.07-2.33h2.24l1.046 4.863c.144.891-.207 1.723-.924 2.373-.718.65-1.804 1.089-3.045 1.089-1.241 0-2.327-.438-3.045-1.09-.717-.65-1.068-1.48-.924-2.372L4.078 1.18Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="BrokenOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgBrokenOutline);
