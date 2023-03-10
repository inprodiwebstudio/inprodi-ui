import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgContactBookOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.925.6A1.933 1.933 0 0 0 1 2.525v10.15c0 1.057.868 1.925 1.925 1.925h9.1a.524.524 0 1 0 0-1.05h-9.1a.865.865 0 0 1-.857-.7h9.957a.525.525 0 0 0 .525-.525v-9.8A1.933 1.933 0 0 0 10.625.6h-7.7Zm0 1.05h7.7c.49 0 .875.386.875.875V11.8H2.05V2.525c0-.49.386-.875.875-.875Zm3.85 1.4c-.864 0-1.575.711-1.575 1.575S5.911 6.2 6.775 6.2 8.35 5.489 8.35 4.625 7.639 3.05 6.775 3.05Zm0 1.05c.296 0 .525.229.525.525a.517.517 0 0 1-.525.525.517.517 0 0 1-.525-.525c0-.296.229-.525.525-.525Zm-1.75 2.8a.883.883 0 0 0-.875.875v.875c0 .581.395 1.04.876 1.32.48.28 1.086.43 1.749.43s1.269-.15 1.75-.43c.48-.28.875-.739.875-1.32v-.875a.883.883 0 0 0-.875-.875h-3.5ZM5.2 7.95h3.15v.7c0 .095-.075.25-.355.413-.28.163-.723.287-1.22.287s-.94-.124-1.22-.287C5.275 8.9 5.2 8.745 5.2 8.65v-.7Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgContactBookOutline);
