import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNoContainsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#NoContainsOutline_svg__a)">
        <path
          d="M13.46.236a.525.525 0 0 0-.36.159L.16 13.333a.525.525 0 1 0 .742.742l1.542-1.543a6.959 6.959 0 0 0 4.556 1.696 7 7 0 0 0 6.994-6.993 6.96 6.96 0 0 0-1.696-4.557l1.542-1.542a.525.525 0 0 0-.38-.9ZM7.001.241A7 7 0 0 0 .008 7.235c0 1.36.387 2.633 1.062 3.706l.77-.769a5.862 5.862 0 0 1-.783-2.937A5.953 5.953 0 0 1 7 1.29c1.067 0 2.07.283 2.938.783l.769-.77A6.944 6.944 0 0 0 7 .242Zm4.554 3.182a5.912 5.912 0 0 1 1.391 3.812 5.953 5.953 0 0 1-5.945 5.944 5.912 5.912 0 0 1-3.811-1.391L5.18 9.796a3.125 3.125 0 0 0 1.82.586 3.152 3.152 0 0 0 3.147-3.147c0-.679-.218-1.306-.585-1.82l1.992-1.992ZM7 4.087a3.152 3.152 0 0 0-3.147 3.148c0 .28.039.552.109.814l.947-.948a2.089 2.089 0 0 1 1.958-1.958l.948-.947a3.157 3.157 0 0 0-.815-.109ZM8.807 6.17a2.1 2.1 0 0 1-1.806 3.162 2.08 2.08 0 0 1-1.064-.292l2.87-2.87Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="NoContainsOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgNoContainsOutline);
