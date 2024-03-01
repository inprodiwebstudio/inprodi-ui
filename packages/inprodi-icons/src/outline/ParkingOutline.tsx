import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgParkingOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ParkingOutline_svg__a)">
        <path
          d="M2.528.174A2.537 2.537 0 0 0 0 2.7v8.945a2.537 2.537 0 0 0 2.528 2.528h8.944A2.537 2.537 0 0 0 14 11.646V2.7A2.537 2.537 0 0 0 11.472.174H2.528Zm0 1.166h8.944c.759 0 1.361.603 1.361 1.361v8.945c0 .758-.602 1.36-1.36 1.36H2.527a1.353 1.353 0 0 1-1.361-1.36V2.7c0-.758.602-1.36 1.36-1.36ZM5.25 3.285a.583.583 0 0 0-.583.583V8.05a.583.583 0 0 0 0 .19v2.628a.584.584 0 1 0 1.166 0V8.729H7.39a2.731 2.731 0 0 0 2.722-2.722A2.731 2.731 0 0 0 7.39 3.285H5.25Zm.583 1.166H7.39c.866 0 1.555.69 1.555 1.556 0 .866-.689 1.555-1.555 1.555H5.833v-3.11Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ParkingOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgParkingOutline);
