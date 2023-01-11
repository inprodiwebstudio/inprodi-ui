import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCalendarOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.528-.313A2.537 2.537 0 0 0 0 2.215v8.944a2.537 2.537 0 0 0 2.528 2.528h8.944A2.537 2.537 0 0 0 14 11.159V2.215a2.537 2.537 0 0 0-2.528-2.528H2.528Zm0 1.166h8.944c.759 0 1.361.603 1.361 1.362v.583H1.167v-.583c0-.759.602-1.362 1.36-1.362ZM1.167 3.965h11.666v7.194c0 .758-.602 1.361-1.36 1.361H2.527a1.353 1.353 0 0 1-1.361-1.361V3.965ZM3.694 5.52a.972.972 0 1 0 0 1.945.972.972 0 0 0 0-1.945ZM7 5.52a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Zm3.306 0a.972.972 0 1 0 0 1.945.972.972 0 0 0 0-1.945Zm-6.612 3.5a.972.972 0 1 0 0 1.945.972.972 0 0 0 0-1.945ZM7 9.02a.972.972 0 1 0 0 1.944.972.972 0 0 0 0-1.944Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCalendarOutline);
