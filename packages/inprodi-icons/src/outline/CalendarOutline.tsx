import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCalendarOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.528.774A2.537 2.537 0 0 0 0 3.3v8.945a2.537 2.537 0 0 0 2.528 2.528h8.944A2.537 2.537 0 0 0 14 12.246V3.3A2.537 2.537 0 0 0 11.472.774H2.528Zm0 1.166h8.944c.759 0 1.361.603 1.361 1.361v.584H1.167V3.3c0-.758.602-1.36 1.36-1.36ZM1.167 5.051h11.666v7.195c0 .758-.602 1.36-1.36 1.36H2.527a1.353 1.353 0 0 1-1.361-1.36V5.05Zm2.527 1.556a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Zm3.306 0A.972.972 0 1 0 7 8.55a.972.972 0 0 0 0-1.944Zm3.306 0a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Zm-6.612 3.5a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Zm3.306 0a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCalendarOutline);
