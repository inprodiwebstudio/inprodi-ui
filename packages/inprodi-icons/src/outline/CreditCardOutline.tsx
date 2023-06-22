import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCreditCardOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.068 2C.932 2 0 2.976 0 4.167v5.666C0 11.024.932 12 2.068 12h9.864C13.068 12 14 11.024 14 9.833V4.167C14 2.976 13.068 2 11.932 2H2.068Zm0 1h9.864c.62 0 1.114.517 1.114 1.167v.5H.955v-.5C.955 3.517 1.448 3 2.068 3ZM.955 6h12.09v3.833c0 .65-.493 1.167-1.113 1.167H2.068c-.62 0-1.113-.517-1.113-1.167V6Zm8.431 2.667a.458.458 0 0 0-.342.144.502.502 0 0 0-.142.356.52.52 0 0 0 .142.356.476.476 0 0 0 .342.144h1.91a.459.459 0 0 0 .341-.144.5.5 0 0 0 .143-.356.519.519 0 0 0-.143-.356.475.475 0 0 0-.341-.144h-1.91Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCreditCardOutline);
