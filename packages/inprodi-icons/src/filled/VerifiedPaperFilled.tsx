import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVerifiedPaperFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M12.727 1.273H3.818c-1.054 0-1.909.854-1.909 1.909v7.636c0 1.055.855 1.91 1.91 1.91h5.726c1.055 0 1.91-.855 1.91-1.91V2.545c0-.703.57-1.272 1.272-1.272Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M9.545 12.727H1.91A1.909 1.909 0 0 1 0 10.818c0-.703.57-1.273 1.273-1.273h5.09c.704 0 1.273.57 1.273 1.273 0 1.055.855 1.91 1.91 1.91ZM14 3.182v-.637a1.272 1.272 0 1 0-2.545 0v1.91h1.272c.704 0 1.273-.57 1.273-1.273ZM6.018 8.213a.952.952 0 0 1-.675-.28l-1.91-1.909a.954.954 0 1 1 1.35-1.35L6.018 5.91l2.507-2.507a.954.954 0 1 1 1.35 1.35L6.692 7.934a.95.95 0 0 1-.674.279Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgVerifiedPaperFilled);
