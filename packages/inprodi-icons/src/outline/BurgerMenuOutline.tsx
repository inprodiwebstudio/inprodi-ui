import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBurgerMenuOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.532 1.836a.524.524 0 1 0 0 1.049h12.936a.525.525 0 1 0 0-1.05H.532Zm0 4.72a.525.525 0 1 0 0 1.049h12.936a.524.524 0 1 0 0-1.05H.532Zm0 4.72a.524.524 0 1 0 0 1.049h12.936a.524.524 0 1 0 0-1.05H.532Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBurgerMenuOutline);
