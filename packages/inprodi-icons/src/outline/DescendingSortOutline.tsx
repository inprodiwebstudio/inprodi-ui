import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDescendingSortOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.59.774a.583.583 0 1 0 0 1.165h7.381a.583.583 0 1 0 0-1.165H.591Zm10.09 2.904a.583.583 0 0 0-.573.591v8.499l-1.724-1.725a.584.584 0 1 0-.824.824l2.719 2.72a.583.583 0 0 0 .824 0l2.719-2.72a.584.584 0 1 0-.824-.824l-1.724 1.725V4.269a.582.582 0 0 0-.592-.59ZM.59 3.881a.583.583 0 1 0 0 1.165h5.827a.583.583 0 1 0 0-1.165H.591Zm0 3.107a.583.583 0 1 0 0 1.166h4.274a.583.583 0 1 0 0-1.166H.59Zm0 3.108a.582.582 0 1 0 0 1.165h2.72a.582.582 0 1 0 0-1.165H.59Zm0 3.107a.582.582 0 1 0 0 1.165h1.166a.582.582 0 1 0 0-1.165H.591Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDescendingSortOutline);
