import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPinOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PinOutline_svg__a)">
        <path
          d="M5.149.236c-.433-.01-.87.143-1.204.476L.476 4.18v.001c-.76.762-.585 2.072.35 2.606l3.721 2.127 1.397 3.493a.553.553 0 0 0 .904.185l2.364-2.363 3.837 3.837a.552.552 0 1 0 .781-.782L9.993 9.448l2.364-2.364a.552.552 0 0 0-.185-.904L8.678 4.783 6.552 1.062V1.06A1.644 1.644 0 0 0 5.149.236Zm-.081 1.091a.549.549 0 0 1 .524.283l2.223 3.889a.553.553 0 0 0 .274.239l2.894 1.157-4.324 4.324-1.157-2.895a.553.553 0 0 0-.239-.274L1.374 5.827a.537.537 0 0 1-.115-.864v-.001l3.468-3.468c.1-.1.22-.155.34-.167Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="PinOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPinOutline);
