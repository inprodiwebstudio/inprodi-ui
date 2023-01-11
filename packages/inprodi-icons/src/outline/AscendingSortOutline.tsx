import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgAscendingSortOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M10.68.774a.583.583 0 0 0-.573.59V9.67L8.383 7.944a.583.583 0 1 0-.824.824l2.719 2.72a.583.583 0 0 0 .824 0l2.719-2.72a.584.584 0 1 0-.824-.824L11.273 9.67V1.365a.582.582 0 0 0-.592-.591ZM.59 1.17a.583.583 0 1 0 0 1.166h1.166a.583.583 0 1 0 0-1.166H.591Zm0 3.108a.583.583 0 1 0 0 1.165h2.72a.583.583 0 1 0 0-1.165H.59Zm0 3.107a.583.583 0 1 0 0 1.165h4.274a.583.583 0 1 0 0-1.165H.59Zm0 3.108a.582.582 0 1 0 0 1.165h5.827a.582.582 0 1 0 0-1.165H.591Zm0 3.107a.584.584 0 0 0-.416.998.583.583 0 0 0 .417.167h7.38a.584.584 0 0 0 .417-.997.583.583 0 0 0-.417-.168H.591Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgAscendingSortOutline);
