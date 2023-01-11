import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRandomOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M10.66.774a.525.525 0 0 0-.366.9l1.203 1.203H1.923C.863 2.877 0 3.741 0 4.8v5.644l1.049-1.049V4.8c0-.482.392-.874.874-.874h9.574L10.294 5.13a.525.525 0 1 0 .742.742l2.098-2.098a.524.524 0 0 0 0-.742L11.036.933a.525.525 0 0 0-.376-.16ZM13.288 5.1l-1.05 1.049v4.595a.875.875 0 0 1-.874.874H1.791l1.202-1.203a.524.524 0 1 0-.741-.741L.154 11.773a.524.524 0 0 0 0 .741l2.098 2.098a.525.525 0 1 0 .741-.741l-1.202-1.203h9.573c1.06 0 1.924-.864 1.924-1.923V5.1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRandomOutline);
