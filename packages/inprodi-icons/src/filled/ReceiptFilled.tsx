import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgReceiptFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.6 10.85v1.4H1.4v-1.4a1.4 1.4 0 1 0 0 2.8h11.2a1.4 1.4 0 0 0 0-2.8Z"
        fill={props.color || `currentColor`}
      />
      <path
        opacity={0.35}
        d="M10.5.64a.99.99 0 0 1-1.4 0 .99.99 0 0 0-1.4 0 .99.99 0 0 1-1.4 0 .99.99 0 0 0-1.4 0 .99.99 0 0 1-1.4 0 .99.99 0 0 0-1.4 0l-.41.41a.99.99 0 0 0-.29.7v10.5h11.2V1.75a.99.99 0 0 0-.29-.7L11.9.64a.99.99 0 0 0-1.4 0Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M9.8 5.25H4.2a.7.7 0 1 1 0-1.4h5.6a.7.7 0 1 1 0 1.4ZM7 8.05H4.2a.7.7 0 1 1 0-1.4H7a.7.7 0 1 1 0 1.4ZM9.8 8.05a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM7 10.85H4.2a.7.7 0 1 1 0-1.4H7a.7.7 0 1 1 0 1.4ZM9.8 10.85a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgReceiptFilled);
