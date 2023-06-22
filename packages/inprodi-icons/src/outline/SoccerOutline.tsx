import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSoccerOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#SoccerOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05c.537 0 1.055.077 1.549.21L7 2.542l-1.549-1.11A5.965 5.965 0 0 1 7 1.223Zm-2.362.488L6.65 3.153v1.403L4.508 6.091l-1.423-.475-.718-2.177a5.948 5.948 0 0 1 2.27-1.727Zm4.725 0a5.948 5.948 0 0 1 2.27 1.727l-.718 2.177-1.423.475L7.35 4.556V3.153l2.013-1.441ZM1.87 4.165l.517 1.569-1.312.94a5.911 5.911 0 0 1 .795-2.509Zm10.26 0a5.91 5.91 0 0 1 .795 2.509l-1.312-.94.517-1.569ZM7 5.167l2.037 1.459-.776 2.354H5.74l-.776-2.354L7 5.166ZM2.838 6.272l1.428.476.836 2.535-.798 1.02-2.352.014a5.913 5.913 0 0 1-.884-2.778l1.77-1.267Zm8.324 0 1.77 1.267a5.913 5.913 0 0 1-.884 2.778l-2.314-.013L8.91 9.25l.825-2.502 1.428-.476ZM5.68 9.68h2.676l.786 1.005-.79 2.28c-.436.1-.887.159-1.353.159a5.97 5.97 0 0 1-1.391-.17l-.766-2.205.838-1.07Zm-1.49 1.324.586 1.688a5.943 5.943 0 0 1-2.32-1.677l1.734-.011Zm5.582 0 1.77.01a5.941 5.941 0 0 1-2.361 1.693l.591-1.703Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="SoccerOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgSoccerOutline);
