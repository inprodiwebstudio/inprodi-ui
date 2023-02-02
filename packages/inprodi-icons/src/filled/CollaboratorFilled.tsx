import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCollaboratorFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#CollaboratorFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M7.07 7.368A3.684 3.684 0 1 0 7.07 0a3.684 3.684 0 0 0 0 7.368ZM11.49 9.579H2.648a2.21 2.21 0 1 0 0 4.421h8.842a2.21 2.21 0 1 0 0-4.421Z"
        />
        <path d="M10.753 11.79H9.28a.737.737 0 0 0-.737.736V14h2.947v-1.474a.737.737 0 0 0-.737-.736Z" />
      </g>
      <defs>
        <clipPath id="CollaboratorFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCollaboratorFilled);
