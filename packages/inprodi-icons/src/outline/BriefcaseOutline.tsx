import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBriefcaseOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.075.836c-.67 0-1.225.555-1.225 1.225v.875H1.225C.555 2.936 0 3.491 0 4.161v8.4c0 .67.555 1.225 1.225 1.225h11.55c.67 0 1.225-.555 1.225-1.225v-8.4c0-.67-.555-1.225-1.225-1.225H10.15v-.875c0-.67-.555-1.225-1.225-1.225h-3.85Zm0 1.05h3.85c.103 0 .175.072.175.175v.875H4.9v-.875c0-.103.072-.175.175-.175Zm-3.85 2.1h11.55c.103 0 .175.072.175.175v4.725h-4.9v-.175a.525.525 0 0 0-.525-.525h-1.05a.525.525 0 0 0-.525.525v.175h-4.9V4.161c0-.103.072-.175.175-.175Zm-.175 5.95h4.9v.175c0 .29.235.525.525.525h1.05c.29 0 .525-.235.525-.525v-.175h4.9v2.625a.167.167 0 0 1-.175.175H1.225a.167.167 0 0 1-.175-.175V9.936Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBriefcaseOutline);
