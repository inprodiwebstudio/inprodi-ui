import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBrochureFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.8 13.6H4.2a1.4 1.4 0 0 1-1.4-1.4V2.4A1.4 1.4 0 0 1 4.2 1h5.6a1.4 1.4 0 0 1 1.4 1.4v9.8a1.4 1.4 0 0 1-1.4 1.4Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M12.6 1.7h-1.594c.12.207.194.444.194.7v9.8c0 .256-.074.494-.194.7H12.6a1.4 1.4 0 0 0 1.4-1.4V3.1a1.4 1.4 0 0 0-1.4-1.4ZM1.4 12.9h1.594a1.391 1.391 0 0 1-.194-.7V2.4c0-.256.074-.493.194-.7H1.4A1.4 1.4 0 0 0 0 3.1v8.4a1.4 1.4 0 0 0 1.4 1.4ZM9.1 3.8H4.9a.7.7 0 0 1 0-1.4h4.2a.7.7 0 0 1 0 1.4ZM9.1 6.6H7a.7.7 0 0 1 0-1.4h2.1a.7.7 0 0 1 0 1.4ZM4.9 6.6a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM9.1 9.4H7A.7.7 0 0 1 7 8h2.1a.7.7 0 0 1 0 1.4ZM9.1 12.2H7a.7.7 0 0 1 0-1.4h2.1a.7.7 0 0 1 0 1.4ZM4.9 9.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM4.9 12.2a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBrochureFilled);
