import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDollarOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .774c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.724a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.824Zm-.183 1.392a.525.525 0 0 0-.517.533v.403c-.977.135-1.75.947-1.75 1.96a2.02 2.02 0 0 0 2.013 2.012h.7A1.13 1.13 0 0 1 8.4 9.26 1.13 1.13 0 0 1 7.262 10.4h-.787a.872.872 0 0 1-.847-.654.525.525 0 1 0-1.016.265A1.917 1.917 0 0 0 6.3 11.42v.379a.525.525 0 1 0 1.05 0v-.368c1.16-.05 2.1-.999 2.1-2.17a2.196 2.196 0 0 0-2.187-2.187h-.7A.955.955 0 0 1 5.6 6.11c0-.538.425-.962.963-.962h.176c.056.009.114.009.17 0h.266c.41 0 .745.275.845.646a.525.525 0 1 0 1.014-.274A1.917 1.917 0 0 0 7.35 4.128v-.38a.525.525 0 0 0-.533-.532Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDollarOutline);
