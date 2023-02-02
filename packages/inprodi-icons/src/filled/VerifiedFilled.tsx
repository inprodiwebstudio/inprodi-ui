import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVerifiedFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.654 1.336C5.054.572 5.97 0 7 0c1.031 0 1.947.571 2.346 1.336.823-.258 1.874-.015 2.604.714.73.73.972 1.78.714 2.604C13.428 5.054 14 5.97 14 7c0 1.031-.571 1.946-1.336 2.346.258.823.015 1.874-.714 2.604-.73.73-1.78.972-2.604.714C8.946 13.428 8.03 14 7 14c-1.031 0-1.946-.571-2.346-1.336-.823.258-1.874.015-2.604-.714-.73-.73-.972-1.781-.714-2.604C.572 8.946 0 8.03 0 7c0-1.031.571-1.947 1.336-2.346-.258-.823-.015-1.874.714-2.604.73-.73 1.781-.971 2.604-.714Z"
        fill={props.color || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.06 9.808a.698.698 0 0 1-.494-.205l-2.1-2.1a.7.7 0 1 1 .99-.99L6.06 8.12l3.005-3.005a.7.7 0 1 1 .99.99l-3.5 3.5a.698.698 0 0 1-.495.204Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgVerifiedFilled);
