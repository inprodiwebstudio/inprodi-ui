import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgInboxXOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#InboxXOutline_svg__a)">
        <path
          d="M10.15.174a3.85 3.85 0 1 0 2.722 6.572A3.849 3.849 0 0 0 10.15.174Zm-7.875 1.4A2.28 2.28 0 0 0 0 3.849v8.05a2.28 2.28 0 0 0 2.275 2.275h8.05a2.28 2.28 0 0 0 2.275-2.275V8.574H8.372a.525.525 0 0 0-.525.525c0 .562-.203.923-.494 1.18a1.64 1.64 0 0 1-1.053.395 1.64 1.64 0 0 1-1.053-.394c-.291-.258-.494-.62-.494-1.181a.525.525 0 0 0-.525-.525H1.05V3.849c0-.676.55-1.225 1.225-1.225h3.546c.119-.375.287-.725.497-1.05H2.275Zm6.143.367c.09 0 .179.035.247.103l1.485 1.485 1.485-1.485a.35.35 0 0 1 .495.495l-1.485 1.485 1.485 1.484a.35.35 0 0 1-.495.495L10.15 4.518 8.665 6.003a.35.35 0 0 1-.495-.495l1.485-1.484L8.17 2.539a.35.35 0 0 1 .248-.598ZM1.05 9.624h2.763c.116.586.354 1.103.74 1.443a2.647 2.647 0 0 0 1.747.657c.611 0 1.246-.214 1.747-.657.386-.34.624-.857.74-1.443h2.763v2.275c0 .675-.55 1.225-1.225 1.225h-8.05c-.675 0-1.225-.55-1.225-1.225V9.624Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="InboxXOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgInboxXOutline);
