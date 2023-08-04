import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgGoalOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#GoalOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.139-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7a6.937 6.937 0 0 0-1.263-4.008l-.756.756c.612.935.969 2.055.969 3.252 0 3.28-2.67 5.95-5.95 5.95-3.28 0-5.95-2.67-5.95-5.95 0-3.28 2.67-5.95 5.95-5.95 1.197 0 2.317.356 3.251.969l.756-.756A6.937 6.937 0 0 0 7 .174Zm6.115.345a.525.525 0 0 0-.361.158L6.629 6.802a.525.525 0 1 0 .742.743l6.125-6.125a.525.525 0 0 0-.381-.901ZM7 2.274a4.905 4.905 0 0 0-4.9 4.9c0 2.702 2.198 4.9 4.9 4.9 2.702 0 4.9-2.198 4.9-4.9a4.86 4.86 0 0 0-.682-2.489l-.77.77A3.852 3.852 0 0 1 7 11.024a3.852 3.852 0 0 1-3.851-3.85 3.852 3.852 0 0 1 5.569-3.448l.77-.77A4.86 4.86 0 0 0 7 2.274Zm0 2.1a2.804 2.804 0 0 0-2.8 2.8c0 1.543 1.256 2.8 2.8 2.8 1.543 0 2.8-1.257 2.8-2.8 0-.319-.056-.627-.157-.914l-.893.892v.022A1.75 1.75 0 1 1 7 5.424h.021l.892-.893A2.736 2.736 0 0 0 7 4.374Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="GoalOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgGoalOutline);
