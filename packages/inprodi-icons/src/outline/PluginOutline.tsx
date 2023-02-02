import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPluginOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PluginOutline_svg__a)">
        <path
          d="M9.858.174a.538.538 0 0 0-.37.162L6.821 3.004l-1.95-1.95a.538.538 0 1 0-.761.76l.138.138-2.89 2.89a3.39 3.39 0 0 0-.002 4.781l-.352-.35-.05.05c-.78.78-.78 2.06 0 2.84l.146.147-.935.935a.537.537 0 1 0 .76.76l.936-.934.146.145c.78.78 2.061.78 2.842 0l.05-.05-.354-.353a3.39 3.39 0 0 0 4.784 0l2.89-2.89.138.138a.539.539 0 1 0 .76-.76l-1.95-1.95 2.668-2.668a.537.537 0 1 0-.76-.761L10.406 6.59 7.58 3.764l2.668-2.667a.538.538 0 0 0-.39-.923Zm-4.85 2.539 6.45 6.45-2.89 2.89a2.298 2.298 0 0 1-3.262 0l-.027-.028a.538.538 0 0 0-.761 0l-.43.43a.926.926 0 0 1-1.32 0l-1.053-1.052a.925.925 0 0 1 0-1.32l.43-.43a.538.538 0 0 0 0-.76l-.027-.029a2.297 2.297 0 0 1 0-3.261l2.89-2.89ZM4.67 5.557a.717.717 0 1 0 0 1.435.717.717 0 0 0 0-1.435Zm3.227 3.227a.717.717 0 1 0 0 1.435.717.717 0 0 0 0-1.435Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="PluginOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPluginOutline);
