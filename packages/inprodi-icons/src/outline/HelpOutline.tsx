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
        d="M7 1.34a5.84 5.84 0 0 0-5.833 5.834A5.84 5.84 0 0 0 7 13.007a5.84 5.84 0 0 0 5.833-5.833A5.84 5.84 0 0 0 7 1.34Zm0 .875a4.952 4.952 0 0 1 4.958 4.959A4.952 4.952 0 0 1 7 12.132a4.952 4.952 0 0 1-4.958-4.958A4.952 4.952 0 0 1 7 2.215Zm0 1.75c-.961 0-1.75.789-1.75 1.75v.146a.438.438 0 1 0 .875 0v-.146c0-.488.387-.875.875-.875s.875.387.875.875c0 .683-.178.769-.489 1.013-.155.122-.36.263-.534.5-.174.238-.29.57-.29.966a.438.438 0 1 0 .875 0c0-.248.049-.35.12-.447.072-.098.197-.195.37-.33.344-.272.823-.78.823-1.702 0-.961-.789-1.75-1.75-1.75Zm0 5.542a.583.583 0 1 0 0 1.167.583.583 0 0 0 0-1.167Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgHelpOutline);
