import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgInstagramColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#InstagramColor_svg__a)">
        <path
          d="M10.894 13.993 3.12 14a3.119 3.119 0 0 1-3.113-3.106L0 3.12A3.119 3.119 0 0 1 3.106.007L10.88 0a3.119 3.119 0 0 1 3.113 3.106L14 10.88a3.118 3.118 0 0 1-3.106 3.113Z"
          fill="url(#InstagramColor_svg__b)"
        />
        <path
          d="M10.894 13.993 3.12 14a3.119 3.119 0 0 1-3.113-3.106L0 3.12A3.119 3.119 0 0 1 3.106.007L10.88 0a3.119 3.119 0 0 1 3.113 3.106L14 10.88a3.118 3.118 0 0 1-3.106 3.113Z"
          fill="url(#InstagramColor_svg__c)"
        />
        <path
          d="M7 9.721c-1.5 0-2.72-1.22-2.72-2.72C4.28 5.5 5.5 4.278 7 4.278 8.5 4.28 9.72 5.5 9.72 7 9.72 8.5 8.5 9.721 7 9.721Zm0-4.664A1.946 1.946 0 0 0 5.057 7c0 1.072.871 1.944 1.943 1.944A1.946 1.946 0 0 0 8.944 7 1.946 1.946 0 0 0 7 5.057ZM9.915 4.668a.583.583 0 1 0 0-1.166.583.583 0 0 0 0 1.166Z"
          fill="#fff"
        />
        <path
          d="M9.332 12.053H4.668c-1.5 0-2.72-1.22-2.72-2.72V4.667c0-1.5 1.22-2.72 2.72-2.72h4.664c1.5 0 2.721 1.22 2.721 2.72v4.664c0 1.5-1.22 2.721-2.72 2.721ZM4.668 2.725a1.946 1.946 0 0 0-1.943 1.943v4.664c0 1.072.871 1.944 1.943 1.944h4.664a1.946 1.946 0 0 0 1.944-1.944V4.668a1.946 1.946 0 0 0-1.944-1.943H4.668Z"
          fill="#fff"
        />
      </g>
      <defs>
        <radialGradient
          id="InstagramColor_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.204 14.01) scale(17.4515)"
        >
          <stop stopColor="#FD5" />
          <stop offset={0.328} stopColor="#FF543F" />
          <stop offset={0.348} stopColor="#FC5245" />
          <stop offset={0.504} stopColor="#E64771" />
          <stop offset={0.643} stopColor="#D53E91" />
          <stop offset={0.761} stopColor="#CC39A4" />
          <stop offset={0.841} stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="InstagramColor_svg__c"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(11.5878 0 0 7.72097 2.253 -.175)"
        >
          <stop stopColor="#4168C9" />
          <stop offset={0.999} stopColor="#4168C9" stopOpacity={0} />
        </radialGradient>
        <clipPath id="InstagramColor_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgInstagramColor);
