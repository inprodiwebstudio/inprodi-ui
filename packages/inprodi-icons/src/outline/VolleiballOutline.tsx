import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVolleiballOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#VolleiballOutline_svg__a)">
        <path
          d="M10.665.174c-.59 0-1.068.482-1.068 1.075 0 .595.479 1.077 1.068 1.077.592 0 1.07-.482 1.07-1.077 0-.593-.478-1.075-1.07-1.075ZM6.544 2.019c-.674 0-1.22.55-1.22 1.229 0 .68.546 1.23 1.22 1.23.676 0 1.222-.55 1.222-1.23 0-.678-.546-1.23-1.222-1.23ZM3.649 3.242a.456.456 0 0 0-.46.41l-.304 2.46a.464.464 0 0 0 .281.484.455.455 0 0 0 .195.034l-.016.008L5.6 6.324 5.358 8.35c-.01.047-.014.093-.02.14l-.015-.007-.916 2.617-2.137 1.23.042.01-.05.02a.456.456 0 0 0-.302.416.465.465 0 0 0 .271.438.455.455 0 0 0 .353.009l2.442-.923a.458.458 0 0 0 .272-.267l.025-.01 1.146-2.11 1.021 1.253a.018.018 0 0 1 .003.005l-.949 2.389h.027a.465.465 0 0 0 .253.577.455.455 0 0 0 .588-.216l1.222-2.456a.464.464 0 0 0 .002-.412l-.888-2.239c.008-.057.018-.115.018-.175l.279-2.708 1.482-.538a.456.456 0 0 0 .145-.052l2.137-1.23a.459.459 0 0 0 .227-.46.463.463 0 0 0-.333-.386.455.455 0 0 0-.348.044l-2.06 1.186-2.095.282a12.942 12.942 0 0 0-1.539.333l-1.785.45.223-1.793a.465.465 0 0 0-.262-.482.455.455 0 0 0-.188-.043Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="VolleiballOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgVolleiballOutline);