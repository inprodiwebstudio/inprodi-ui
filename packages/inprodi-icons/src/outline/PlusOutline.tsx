import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPlusOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.991.836a.552.552 0 0 0-.543.56v5.888H.56a.552.552 0 1 0 0 1.104h5.888v5.888a.552.552 0 1 0 1.104 0V8.388h5.888a.552.552 0 1 0 0-1.104H7.552V1.396a.552.552 0 0 0-.56-.56Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPlusOutline);
