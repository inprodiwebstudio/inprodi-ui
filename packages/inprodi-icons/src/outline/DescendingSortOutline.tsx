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
        d="M.59.836a.583.583 0 1 0 0 1.165h7.381a.583.583 0 1 0 0-1.165H.591Zm10.09 2.905a.583.583 0 0 0-.573.59v8.5l-1.724-1.725a.584.584 0 1 0-.824.824l2.719 2.719a.583.583 0 0 0 .824 0l2.719-2.72a.584.584 0 0 0-.41-1.002.584.584 0 0 0-.414.179l-1.724 1.724V4.332a.582.582 0 0 0-.592-.591ZM.59 3.944a.583.583 0 1 0 0 1.165h5.827a.583.583 0 1 0 0-1.165H.591Zm0 3.107a.583.583 0 1 0 0 1.165h4.274a.583.583 0 1 0 0-1.165H.59Zm0 3.107a.582.582 0 1 0 0 1.166h2.72a.582.582 0 1 0 0-1.166H.59Zm0 3.108a.582.582 0 1 0 0 1.165h1.166a.582.582 0 1 0 0-1.165H.591Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDescendingSortOutline);
