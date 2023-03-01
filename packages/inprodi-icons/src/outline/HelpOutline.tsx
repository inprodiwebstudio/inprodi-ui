import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHelpOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 1.403a5.84 5.84 0 0 0-5.833 5.833A5.84 5.84 0 0 0 7 13.069a5.84 5.84 0 0 0 5.833-5.833A5.84 5.84 0 0 0 7 1.403Zm0 .875a4.952 4.952 0 0 1 4.958 4.958A4.952 4.952 0 0 1 7 12.194a4.952 4.952 0 0 1-4.958-4.958A4.952 4.952 0 0 1 7 2.278Zm0 1.75c-.961 0-1.75.788-1.75 1.75v.145a.437.437 0 1 0 .875 0v-.145c0-.489.387-.875.875-.875s.875.386.875.875c0 .682-.178.768-.489 1.012-.155.123-.36.264-.534.501-.174.238-.29.569-.29.966a.438.438 0 1 0 .875 0c0-.25.049-.35.12-.448.072-.098.197-.195.37-.33.344-.271.823-.78.823-1.701 0-.962-.789-1.75-1.75-1.75Zm0 5.541a.583.583 0 1 0 0 1.167.583.583 0 0 0 0-1.167Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgHelpOutline);
