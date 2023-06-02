import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMuteFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#MuteFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M7.12.52a1.477 1.477 0 0 0-1.64.47L2.977 4.121h-.765C.99 4.121 0 5.113 0 6.331v1.474c0 1.219.992 2.21 2.21 2.21h.766l2.505 3.131a1.473 1.473 0 0 0 2.624-.92V1.911c0-.627-.395-1.184-.986-1.392Z"
        />
        <path d="M13.263 9.279a.735.735 0 0 1-.521-.216L9.795 6.116a.736.736 0 1 1 1.042-1.042l2.947 2.947a.736.736 0 0 1-.521 1.258Z" />
        <path d="M10.316 9.279a.736.736 0 0 1-.521-1.258l2.947-2.947a.736.736 0 1 1 1.042 1.042l-2.947 2.947a.735.735 0 0 1-.521.216Z" />
      </g>
      <defs>
        <clipPath id="MuteFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMuteFilled);
