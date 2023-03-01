import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function Svg3DCubeFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#3dCubeFilled_svg__a)">
        <path
          d="M12.734 2.794 6.693 6.38a.717.717 0 0 0 .363 1.34.712.712 0 0 0 .362-.099l6.035-3.58a2.506 2.506 0 0 0-.72-1.246Z"
          fill={props.color || `currentColor`}
        />
        <path
          d="M7.055 14c.243 0 .483-.047.72-.118V7a.718.718 0 1 0-1.439 0v6.881c.236.072.476.118.72.118Z"
          fill={props.color || `currentColor`}
        />
        <path
          d="M6.694 7.62a.718.718 0 1 0 .725-1.241L1.376 2.794a2.507 2.507 0 0 0-.72 1.245L6.694 7.62Z"
          fill={props.color || `currentColor`}
        />
        <path
          d="M12.195 2.407 8.239.297a2.513 2.513 0 0 0-2.369 0l-3.955 2.11a2.512 2.512 0 0 0-1.332 2.22v4.746c0 .932.51 1.783 1.333 2.22l3.956 2.111a2.522 2.522 0 0 0 2.368 0l3.955-2.11a2.514 2.514 0 0 0 1.332-2.221V4.627c0-.93-.51-1.782-1.332-2.22Z"
          fill={props.color || `currentColor`}
          opacity={0.35}
        />
      </g>
      <defs>
        <clipPath id="3dCubeFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(Svg3DCubeFilled);
