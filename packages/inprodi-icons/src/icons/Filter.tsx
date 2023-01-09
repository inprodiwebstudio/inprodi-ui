import * as React from "react";
import { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.972.6A.98.98 0 0 0 0 1.572v1.202a2.918 2.918 0 0 0 1.114 2.292l3.942 3.076v5.875a.584.584 0 0 0 .922.475L8.7 12.547a.583.583 0 0 0 .245-.475v-3.93l3.941-3.076.002-.001A2.918 2.918 0 0 0 14 2.774V1.572A.98.98 0 0 0 13.028.6H.972Zm.195 1.167h11.667v1.007c0 .536-.246 1.042-.667 1.374L8.003 7.397a.583.583 0 0 0-.225.46v3.915l-1.556 1.112V7.857a.583.583 0 0 0-.225-.46l-4.163-3.25a1.748 1.748 0 0 1-.667-1.373V1.767Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
