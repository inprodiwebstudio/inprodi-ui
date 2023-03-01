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
        d="M10.66.836a.525.525 0 0 0-.366.901l1.203 1.203H1.923C.863 2.94 0 3.803 0 4.863v5.644l1.049-1.05V4.864c0-.483.392-.874.874-.874h9.574L10.294 5.19a.525.525 0 1 0 .742.742l2.098-2.098a.524.524 0 0 0 0-.742L11.036.995a.525.525 0 0 0-.376-.159Zm2.628 4.327-1.05 1.05v4.594a.875.875 0 0 1-.874.874H1.791l1.202-1.202a.524.524 0 1 0-.741-.742L.154 11.835a.525.525 0 0 0 0 .742l2.098 2.098a.522.522 0 0 0 .749.007.524.524 0 0 0-.008-.749L1.791 12.73h9.573c1.06 0 1.924-.863 1.924-1.923V5.163Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRandomOutline);
