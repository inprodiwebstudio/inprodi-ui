import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPencilOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M11.424.836a2.57 2.57 0 0 0-1.824.752L8.192 2.996a.553.553 0 0 0-.13.13l-6.62 6.619a1.29 1.29 0 0 0-.328.558L.021 14.132a.553.553 0 0 0 .683.683l3.83-1.093v-.001c.21-.06.402-.172.557-.328l6.606-6.606a.553.553 0 0 0 .155-.155l1.396-1.396a2.588 2.588 0 0 0 0-3.648 2.57 2.57 0 0 0-1.824-.752Zm0 1.099c.376 0 .752.145 1.041.435h.001c.58.58.58 1.504 0 2.084l-1.083 1.084-2.085-2.085 1.084-1.083c.29-.29.666-.435 1.042-.435Zm-2.907 2.3L10.6 6.319 4.31 12.612a.187.187 0 0 1-.08.046l-.363.104-1.792-1.792.104-.364a.18.18 0 0 1 .046-.08l6.293-6.291Zm-6.79 7.95.923.925-1.293.369.37-1.293Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPencilOutline);
