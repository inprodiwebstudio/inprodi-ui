import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPowerPointColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.4 7.3a6.3 6.3 0 0 0 12.6 0H1.4Z" fill="#D35230" />
      <path d="M7.7 1v6.3H14A6.3 6.3 0 0 0 7.7 1Z" fill="#FF8F6B" />
      <path d="M7.7 1a6.3 6.3 0 0 0-6.3 6.3h6.3V1Z" fill="#ED6C47" />
      <path
        opacity={0.05}
        d="M7.7 4.738c0-.711-.577-1.288-1.288-1.288H2.72a6.277 6.277 0 0 0 .629 8.4H6.41c.712 0 1.289-.577 1.289-1.288V4.738Z"
        fill="#000"
      />
      <path
        opacity={0.07}
        d="M6.375 3.567H2.634a6.265 6.265 0 0 0 .38 7.933h3.36c.604 0 1.093-.489 1.093-1.092v-5.75c0-.602-.49-1.091-1.092-1.091Z"
        fill="#000"
      />
      <path
        opacity={0.09}
        d="M6.337 3.683h-3.79A6.263 6.263 0 0 0 1.4 7.3c0 1.452.496 2.785 1.32 3.85h3.617a.896.896 0 0 0 .896-.896V4.579a.896.896 0 0 0-.896-.896Z"
        fill="#000"
      />
      <path
        d="M6.3 10.8H.7a.7.7 0 0 1-.7-.7V4.5a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 .7.7v5.6a.7.7 0 0 1-.7.7Z"
        fill="url(#PowerPointColor_svg__a)"
      />
      <path
        d="M3.736 5.554H2.1v3.5h.708V7.822h.797c.657 0 1.189-.532 1.189-1.19v-.02c0-.584-.474-1.058-1.058-1.058Zm.313 1.171c0 .301-.243.545-.544.545h-.697V6.106h.697c.3 0 .544.244.544.545v.074Z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="PowerPointColor_svg__a"
          x1={0.205}
          y1={4.005}
          x2={6.569}
          y2={10.37}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CA4E2A" />
          <stop offset={1} stopColor="#B63016" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPowerPointColor);
