import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLinkFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#LinkFilled_svg__a)">
        <path
          d="M3.91 11.582a1.08 1.08 0 0 1-1.492 0 1.045 1.045 0 0 1-.308-.746c0-.281.11-.546.308-.745l3.096-3.096c-.42-.2-.878-.316-1.356-.316-.845 0-1.64.329-2.237.926L.927 8.6A3.14 3.14 0 0 0 0 10.836c0 .845.33 1.64.926 2.237A3.143 3.143 0 0 0 3.164 14c.844 0 1.639-.329 2.237-.927l.994-.994a3.14 3.14 0 0 0 .926-2.237c0-.478-.116-.936-.316-1.356L3.91 11.582ZM13.074.927A3.143 3.143 0 0 0 10.836 0C9.992 0 9.196.329 8.6.927l-.994.994a3.14 3.14 0 0 0-.926 2.237c0 .478.116.936.316 1.356L8.54 3.97l1.552-1.552c.198-.199.464-.308.745-.308.282 0 .547.11.746.31.2.197.309.462.309.744s-.11.547-.309.746l-1.551 1.552-1.544 1.544c.42.2.877.316 1.356.316.844 0 1.64-.329 2.237-.927l.994-.994a3.14 3.14 0 0 0 .927-2.237c-.001-.845-.33-1.64-.927-2.237Z"
          fill={props.color || `currentColor`}
        />
        <path
          d="M4.364 10.69a1.054 1.054 0 0 1-.746-1.8l4.92-4.92a1.054 1.054 0 1 1 1.492 1.491l-4.921 4.921a1.048 1.048 0 0 1-.745.309Z"
          fill={props.color || `currentColor`}
          opacity={0.35}
        />
      </g>
      <defs>
        <clipPath id="LinkFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgLinkFilled);
